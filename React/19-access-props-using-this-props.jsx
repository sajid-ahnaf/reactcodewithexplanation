// Define a class-based component called ReturnTempPassword.
class ReturnTempPassword extends React.Component {
  // Constructor for ReturnTempPassword that takes props as a parameter.
  constructor(props) {
    // Call the constructor of the parent class (React.Component) and pass the props.
    super(props);
  }

  // Define the render method for ReturnTempPassword.
  render() {
    // Return JSX code wrapped in parentheses.
    return (
      // JSX code representing a <div> element with a <p> element inside.
      <div>
        <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
      </div>
    );
  }
};

// Define another class-based component called ResetPassword.
class ResetPassword extends React.Component {
  // Constructor for ResetPassword that takes props as a parameter.
  constructor(props) {
    // Call the constructor of the parent class (React.Component) and pass the props.
    super(props);
  }

  // Define the render method for ResetPassword.
  render() {
    // Return JSX code wrapped in parentheses.
    return (
      // JSX code representing a <div> element with multiple <h2> and <h3> elements, and a ReturnTempPassword component.
      <div>
        <h2>Reset Password</h2>
        <h3>We've generated a new temporary password for you.</h3>
        <h3>Please reset this password from your account settings ASAP.</h3>
        {/* Render the ReturnTempPassword component here and pass it a temporary password as a prop. */}
        <ReturnTempPassword tempPassword={'Elon Rocks'} />
      </div>
    );
  }
};
