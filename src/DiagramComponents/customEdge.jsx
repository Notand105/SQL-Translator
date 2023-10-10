import React,{useState} from 'react';
import { BaseEdge, EdgeLabelRenderer, getBezierPath, getSmoothStepPath, getStraightPath } from 'reactflow';

import './buttonedge.css';

// const onEdgeClick = (evt, id) => {
//   evt.stopPropagation();

// };

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) {
  const [edgePath, labelX, labelY] = /*getSmoothStepPath*/ getStraightPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const [isEditing, setIsEditing] = useState(false); // State to track edit mode
  const [text, setText] = useState('.'); // Initial text

  const handleDoubleClick = (e) => {
    e.preventDefault()
    setIsEditing(true); // Enable edit mode
  };
  const handleBlur = () => {
    setIsEditing(false); // Disable edit mode when blurred (e.g., when clicking outside)
  };

  const handleChange = (e) => {
    setText(e.target.value); // Update the text as it changes
  };
 const onEdgeClick = (evt, id) => {
   evt.stopPropagation();
    setIsEditing(true)
 };
  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style}  />
      <EdgeLabelRenderer >
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            fontSize: 12,
            // everything inside EdgeLabelRenderer has no pointer events by default
            // if you have an interactive element, set pointer-events: all
            pointerEvents: 'all',
          }}
          className="nodrag nopan"
        >
            <div className=''>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <div onContextMenu={handleDoubleClick} className='bg-white rounded text-center w-4'>{text}</div>
      )}
      </div>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}