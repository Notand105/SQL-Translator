import React, { useCallback, useState, useMemo } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  applyEdgeChanges, applyNodeChanges
} from 'reactflow';

import 'reactflow/dist/style.css';

//import TextUpdaterNode from './TextUpadaterNode';
import Relation from './Relation';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  { id: 'e', position: { x: 100, y: 100 }, data: { label: '3' }, type:'rel' },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2', label:'labelinthemiddle', connectable:true }];

export default function App() {

  const nodetypes = useMemo(()=>({ rel: Relation}), [])

  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodeIndex, setNodeIndex] = useState(67)
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

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

  let newNode = {id:nodeIndex, position:{x:100, y:110}, data:{label:'new'}, width:'150', height:'50', type:'rel', isConnectable:'true'}

  //const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const handleClick = () =>{
    console.log('clicked')
    setNodes((nodes)=>[...nodes, newNode])
    console.log(nodes)
    setNodeIndex(nodeIndex => nodeIndex+1)
    
  }

  return (
    <>
    <div style={{ width: '100vw', height: '100vh', backgroundColor:"#323232" }}>
      <button className='bg-orange-600' onClick={handleClick} >Añadir entidad</button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodetypes}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
    </>
  );
}