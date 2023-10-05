import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const handleStyle = { left: 10 };

function Relation({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node bg-white w-20 h-20 rotate-45 flex  justify-center items-center bg-transparent text-white border-2 border-white" >
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      <div className='-rotate-45 '>
        relation
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="a"
        style={handleStyle}
        isConnectable={isConnectable}
      />
      <Handle type="source" position={Position.Bottom} id="b" isConnectable={isConnectable} />
    </div>
  );
}

export default Relation;