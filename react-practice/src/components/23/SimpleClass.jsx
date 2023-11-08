import React from "react";

class SimpleClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Suad" };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={() => this.setState({ name: "changed" })}>
          click
        </button>
      </div>
    );
  }
}
export default SimpleClassComponent;
