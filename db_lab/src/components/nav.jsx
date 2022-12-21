import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class nav extends Component {
    state = {
        classes:"list-group-item list-group-item-action"
    }

    handleClick = () => {
        if(this.state.classes = "list-group-item list-group-item-action") {
            console.log("1")
            this.setState({classes : "list-group-item list-group-item-action active"})
            console.log(this.state.classes)
        }else if(this.state.classes = "list-group-item list-group-item-action active") {
            console.log("2")
            this.setState({
                classes:"list-group-item list-group-item-action"
            })
        }
    }

    render() {
        return (
            <div className="list-group">
                <Link to='/table1' className={this.state.classes} aria-current="true" >
                    Table1
                </Link>
                <Link to='/table2' className={this.state.classes}>Table2</Link>
                <Link to="/post" className={this.state.classes} >Some Fake Posts</Link>
            </div>
        );
    }
}

export default nav;