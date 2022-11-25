import React from 'react';

function App() {
  return (
    // Fragmentは区切り
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={() => console.log('I am ?')}></input>
    </React.Fragment>
  );
}

export default App;
