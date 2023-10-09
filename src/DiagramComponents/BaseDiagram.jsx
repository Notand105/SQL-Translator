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

import Relation from './Relation';
import Atribute from './Atribute';
import Entitie from './Entitie';
/*
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  { id: 'e', position: { x: 100, y: 100 }, data: { label: '3' }, type:'rel' },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2', label:'labelinthemiddle', connectable:true }];
*/

export default function App() {

  const nodetypes = useMemo(()=>({ rel: Relation, atr:Atribute, ent:Entitie}), [])

  const [nodes, setNodes, onNodesChange] = useNodesState(/*initialNodes*/[]);
  const [edges, setEdges, onEdgesChange] = useEdgesState(/*initialEdges*/[]);
  const [nodeIndex, setNodeIndex] = useState(67)
 

const onConnect = useCallback((params) => setEdges((eds) => addEdge({...params, type:'smoothstep'}, eds)), [setEdges]);

const handleAddRel = useCallback(() =>{
    let id = (Math.random() * 1001).toString()
    let newNode = {id:id, position:{x:100 + Math.random() * 100, y:110}, data:{label:'new'}, width:'150', height:'50', type:'rel', connectable:'true'}
    console.log('clicked')
    setNodes((nodes)=>nodes.concat(newNode))
    console.log(nodes)
    setNodeIndex(nodeIndex => nodeIndex+1)
    
  },[nodes, setNodes, edges, setEdges])

const handleAddAtr = useCallback(() =>{
    let id = (Math.random() * 1001).toString()
    let newNode = {id:id, position:{x:100, y:110}, data:{label:'new'}, width:'150', height:'50', type:'atr', connectable:'true'}
    console.log('clicked')
    setNodes((nodes)=>nodes.concat(newNode))
    console.log(nodes)
    setNodeIndex(nodeIndex => nodeIndex+1)
    
  },[nodes, setNodes, edges, setEdges])

const handleAddEnt = useCallback(() =>{
    let id = (Math.random() * 1001).toString()
    let newNode = {id:id, position:{x:100, y:110}, data:{label:'new'}, width:'150', height:'50', type:'ent', connectable:'true'}
    console.log('clicked')
    setNodes((nodes)=>nodes.concat(newNode))
    console.log(nodes)
    setNodeIndex(nodeIndex => nodeIndex+1)
    
  },[nodes, setNodes, edges, setEdges])



  return (
    <>
    <div style={{ width: '100vw', height: '100vh', backgroundColor:"#323232" }}>
      <div className='flex gap-2'>
      <button className='bg-orange-600' onClick={handleAddRel} >Añadir relacion</button>
      <button className='bg-orange-600' onClick={handleAddAtr} >Añadir atributo</button>
      <button className='bg-orange-600' onClick={handleAddEnt} >Añadir entidad</button>
      <div className='bg-blue-500 px-2'>Target</div>
      <div className='bg-red-500 px-2'>Source</div>
      </div>
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
        {/* <MiniMap /> */}
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
    </>
  );
}