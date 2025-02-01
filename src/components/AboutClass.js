import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class AboutClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
    //api calls
  }

  render() {
    console.log("Parend render");
    return (
      <div>
        <h1>About Class Component</h1>
        <UserClass name={"First"} />
        <UserClass name={"Second"} />
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default AboutClass;
