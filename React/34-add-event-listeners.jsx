// Define a class-based component called MyComponent.
class MyComponent extends React.Component {
  // Constructor for MyComponent that takes props as a parameter.
  constructor(props) {
    // Call the constructor of the parent class (React.Component) and pass the props.
    super(props);

    // Initialize the component's state with a property called 'message' set to an empty string.
    this.state = {
      message: ''
    };

    // Bind the 'handleEnter' and 'handleKeyPress' methods to the current instance of the component.
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  // Define a method called 'handleEnter'.
  handleEnter() {
    // Update the component's state by appending a message when the enter key is pressed.
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    });
  }

  // Define a method called 'handleKeyPress' that takes an 'event' as a parameter.
  handleKeyPress(event) {
    // Check if the key code of the event is 13 (which corresponds to the enter key).
    if (event.keyCode === 13) {
      // If the enter key is pressed, call the 'handleEnter' method.
      this.handleEnter();
    }
  }

  // Lifecycle method: componentDidMount is called after the component is added to the DOM.
  componentDidMount() {
    // Add an event listener to the document to listen for keydown events and call 'handleKeyPress' when the event occurs.
    document.addEventListener("keydown", this.handleKeyPress);
  }

  // Lifecycle method: componentWillUnmount is called before the component is removed from the DOM.
  componentWillUnmount() {
    // Remove the previously added event listener to prevent memory leaks when the component is unmounted.
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  // Define the render method for MyComponent.
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
