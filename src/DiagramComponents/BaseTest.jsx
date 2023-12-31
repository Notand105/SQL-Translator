import { useCallback, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow';
import 'reactflow/dist/style.css';

import Relation from './Relation';

import './text-updater-node.css';

const rfStyle = {
  backgroundColor: '#B8CEFF',
};

const initialNodes = [
  { id: 'node-1', type: 'rel', position: { x: 0, y: 0 }, data: { value: 123 } },
  {
    id: 'node-2',
    type: 'output',
    targetPosition: 'top',
    position: { x: 0, y: 200 },
    data: { label: 'node 2' },
  },
  {
    id: 'node-3',
    type: 'output',
    targetPosition: 'top',
    position: { x: 200, y: 200 },
    data: { label: 'node 3' },
  },
];

const initialEdges = [
  { id: 'edge-1', source: 'node-1', target: 'node-2', sourceHandle: 'a' },
  { id: 'edge-2', source: 'node-1', target: 'node-3', sourceHandle: 'b' },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { rel: Relation};

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const [nodeIndex, setNodeIndex] = useState(67)

  let newNode = {id:nodeIndex, position:{x:100, y:110}, data:{label:'new'}, width:'150', height:'50', type:'rel', connectable:'true'}

  const handleClick = () =>{
    console.log('clicked')
    setNodes((nodes)=>[...nodes, newNode])
    console.log(nodes)
    setNodeIndex(nodeIndex => nodeIndex+1)
    
  }

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div className='w-screen h-screen'>
      <button className='bg-orange-600' onClick={handleClick} >Añadir entidad</button>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          style={rfStyle}
        />
      );
    </div>

)
  }
export default Flow;