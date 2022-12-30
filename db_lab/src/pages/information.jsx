import React, { Component } from 'react';
import Nav from '../components/nav';
import Table from '../components/table'
class information extends Component {
    state = {}
    render() {
        console.log("asdasdasd")
        return (
            <div className='row'>
                <div className="col-sm-2">
                    <Nav />
                </div>
                <div className="col-sm-5">
                    <Table />
                </div>

            </div>
        );
    }
}

export default information;