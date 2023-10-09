import { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function Relation({ data, isConnectable }) {
  isConnectable = true
  const [isEditing, setIsEditing] = useState(false); // State to track edit mode
  const [text, setText] = useState('relación'); // Initial text

  const handleDoubleClick = () => {
    setIsEditing(true); // Enable edit mode
  };
  const handleBlur = () => {
    setIsEditing(false); // Disable edit mode when blurred (e.g., when clicking outside)
  };

  const handleChange = (e) => {
    setText(e.target.value); // Update the text as it changes
  };
   

  return (
    <div className=" w-20 h-20 rotate-45 flex  justify-center items-center border-2 bg-white " >
      <Handle className='bg-red-500 -translate-x-10' type="target" position={Position.Top} isConnectable={isConnectable} />
      <div className='-rotate-45  '>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <div onDoubleClick={handleDoubleClick} className='bg-transparent'>{text}</div>
      )}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id='ax'
        style={handleStyle}
        isConnectable={isConnectable}
        className='bg-blue-500 translate-x-16'
      />
      {/* <Handle type="source" position={Position.Bottom} id='bx' isConnectable={isConnectable} /> */}
    </div>
  );
}

export default Relation;