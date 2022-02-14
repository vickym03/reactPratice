import React from 'react';

function DataCount({count, text}) {
    console.log(`Rendering ${text} DataCount`);
  return <div>

  {text}--{count}
  </div>;
  
}

export default React.memo(DataCount);
