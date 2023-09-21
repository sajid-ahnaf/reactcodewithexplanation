// Define a constant variable called ChildComponent, which is a functional component.
const ChildComponent = () => {
  // Return JSX (JavaScript XML) code wrapped in parentheses.
  return (
    // JSX code representing a <div> element with a <p> element inside.
    <div>
      <p>I am the child</p>
    </div>
  );
};

// Define a class-based component called ParentComponent that extends React.Component.
class ParentComponent extends React.Component {
  // Constructor for ParentComponent that takes props as a parameter.
  constructor(props) {
    // Call the constructor of the parent class (React.Component) and pass the props.
    super(props);
  }
  // Define the render method for ParentComponent.
  render() {
    // Return JSX code wrapped in parentheses.
    return (
      // JSX code representing a <div> element with an <h1> element and ChildComponent inside.
      <div>
        <h1>I am the parent</h1>
        { /* change code below this line */ }
        {/* Render the ChildComponent component here */}
        <ChildComponent />
        { /* change code above this line */ }
      </div>
    );
  }
};
