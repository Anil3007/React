import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log(`${this.props.name} Child constructor`)
  }

  componentDidMount() {
    console.log(`${this.props.name} Child Did Mount`)
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    console.log(`${this.props.name} Child render`)
    return (
      <div className="userClass">
        <h1>User Class:{this.props.name}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={() => {
            this.setState({
                count: this.state.count + 1
            })
        }}>button</button>
      </div>
    );
  }
}

export default UserClass;
