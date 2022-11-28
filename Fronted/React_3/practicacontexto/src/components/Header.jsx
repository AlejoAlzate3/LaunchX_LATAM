import React from "react";
import { ReactDOM } from "react";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            favoriteColor: "Red"
        }
    }

    static getDerivedStateFromProps(props, state) {
        return { favoriteColor: props.favcol };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ favoriteColor: "Yellow" })
        }, 1000)
    }

    render() {
        return (
            <h1>Mi color favorito es {this.favoriteColor}</h1>
        )
    }
}

ReactDOM.render(<Header />, document.getElementById("root"));