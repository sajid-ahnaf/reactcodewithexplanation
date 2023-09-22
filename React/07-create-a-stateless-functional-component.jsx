const MyComponent = ()=> (<div>Beyonce Halo</div>); 
/*const MyComponent = () =>: This line declares a constant
variable called MyComponent and assigns it to an arrow 
function. This function is a stateless functional component
in React.*/

/*Stateless functional components (SFCs) in React are JavaScript 
functions that primarily render UI elements based on the data 
they receive through props. They do not have their own internal 
state, are simple to write, lack access to React's lifecycle methods,
and are suitable for building presentational components.

Stateful functional components, on the other hand, can manage their own 
internal state using hooks like `useState`. They have access to React's 
lifecycle methods, making them suitable for interactive and dynamic components 
that require state management and complex logic.*/


/*Explanation: In this Example, The MyComponent component 
is used within the App component, and when you render App, 
you'll see "Beyonce Halo" displayed as part of the content.

import React from 'react';

const MyComponent = () => (<div>Beyonce Halo</div>);

function App() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <MyComponent />
    </div>
  );
}

export default App;*/
