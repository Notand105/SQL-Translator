import React, { useCallback, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';




const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2', label:'labelinthemiddle' }];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodeIndex, setNodeIndex] = useState(3)
  const [editingNodeId, setEditingNodeId] = useState(null);
  
  let newNode = {id:nodeIndex.toString(), position:{x:100, y:100}, data:{label:'new'}, width:'150', height:'50', type:'default'}

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

  const handleClick = () =>{
    console.log('clicked')
    setNodes((nodes)=>[...nodes, newNode])
    console.log(nodes)
    setNodeIndex(nodeIndex => nodeIndex + 1)
    
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
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
    </>
  );
}