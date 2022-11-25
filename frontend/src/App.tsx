import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Hello World!</h1>
//     </div>
//   );
// }
const app = () => { return <div>Hi!</div> }
const Cat = () => { return <div>cat</div> }

function App() {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
}

export default App;
