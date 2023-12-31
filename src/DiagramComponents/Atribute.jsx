import { useCallback, useState } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function Atribute({ data, isConnectable }) {
  isConnectable = true
  const [isEditing, setIsEditing] = useState(false); // State to track edit mode
  const [text, setText] = useState('atributo'); // Initial text
  const [pk, setPk] = useState(false); // Initial text

  const handleDoubleClick = () => {
    setIsEditing(true); // Enable edit mode
  };
  const handleBlur = () => {
    setIsEditing(false); // Disable edit mode when blurred (e.g., when clicking outside)
  };

  const handleChange = (e) => {
    setText(e.target.value); // Update the text as it changes
  };

  const makePK = (e) =>{
    e.preventDefault()
    setPk(pk => !pk)
  }

  return (
    <div onContextMenu={makePK} className="text-updater-node w-20 text-sm flex rounded-full justify-center items-center p-1 border-2 bg-white" >
      <Handle id="cx" type="target" position={Position.Top} isConnectable={isConnectable} className='bg-red-500' />
      <Handle id="dx" type="target" position={Position.Right} isConnectable={isConnectable} className='bg-red-500 ' />
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
        <div onDoubleClick={handleDoubleClick} className={`${pk ? 'underline':''}`}>{text}</div>
      )}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id='ax'
        style={handleStyle}
        isConnectable={isConnectable}
        className='bg-blue-500 translate-x-7'
      />
      <Handle
        type="source"
        position={Position.Left}
        id='bx'
        style={handleStyle}
        isConnectable={isConnectable}
        className='bg-blue-500 -translate-x-3'
      />
    </div>
  );
}

export default Atribute;