// Define a class-based component called MyComponent.
class MyComponent extends React.Component {
  // Constructor for MyComponent that takes props as a parameter.
  constructor(props) {
    // Call the constructor of the parent class (React.Component) and pass the props.
    super(props);

    // Initialize the component's state with a property called 'display' set to 'true'.
    this.state = {
      display: true
    };

    // Bind the 'toggleDisplay' method to the current instance of the component.
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  // Define a method called 'toggleDisplay'.
  toggleDisplay() {
    // Update the component's state by toggling the value of 'display'.
    this.setState({
      display: !this.state.display
    });
  }

  // Define the render method for MyComponent.
  render() {
    // Conditional rendering based on the value of 'display' in the component's state.
    if (this.state.display) {
      // If 'display' is 'true', render this block:
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    } else {
      // If 'display' is 'false', render this block:
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }
  }
}
