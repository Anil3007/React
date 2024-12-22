
import React from "react";
import UserClass from "./UserClass";


class AboutClass extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent constructor")
    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
        //api calls
    }

    render() {
        console.log("Parend render")
        return (
            <div>
                <h1>About Class Component</h1>
                <UserClass name = {"First"}/>
                <UserClass name = {"Second"}/>
            </div>
            
        )
    }
}

export default AboutClass;