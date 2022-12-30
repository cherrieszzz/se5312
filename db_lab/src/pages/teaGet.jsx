import React, { Component } from 'react';
import axios from 'axios'

class teaGet extends Component {
    state = { 
        awards:[]
     } 

    async componentDidMount() {
        const {data : newAwards} = await axios.get(`http://localhost:8082/teacherget/${this.props}`)
    }
    render() { 
        return (
            <>

            </>
        );
    }
}
 
export default teaGet;