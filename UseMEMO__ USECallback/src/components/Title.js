import React from 'react';

function Title() {
    console.log("Rendering Title");
  return <div>
    Title Component
  </div>;
}

export default React.memo(Title);
