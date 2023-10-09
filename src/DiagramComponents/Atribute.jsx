import { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function Atribute({ data, isConnectable }) {
  isConnectable = true
  const [isEditing, setIsEditing] = useState(false); // State to track edit mode
  const [text, setText] = useState('atributo'); // Initial text

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
    <div className="text-updater-node w-32 flex rounded-full justify-center items-center p-2 border-2 bg-white" >
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} className='bg-red-500' />
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
        <div onDoubleClick={handleDoubleClick} className=''>{text}</div>
      )}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id='ax'
        style={handleStyle}
        isConnectable={isConnectable}
        className='bg-blue-500 translate-x-12'
      />
      {/* <Handle type="source" position={Position.Bottom} id='bx' isConnectable={isConnectable} /> */}
    </div>
  );
}

export default Atribute;