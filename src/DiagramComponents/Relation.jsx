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
    <div className="text-updater-node w-20 h-20 rotate-45 flex  justify-center items-center bg-transparent text-white border-2 border-white" >
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div className='-rotate-45 text-red-600 bg-transparent '>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          className='bg-transparent'
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
      />
      <Handle type="source" position={Position.Bottom} id='bx' isConnectable={isConnectable} />
    </div>
  );
}

export default Relation;