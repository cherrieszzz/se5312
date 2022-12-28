import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class home extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <Link to=''>我是学生</Link>
            <Link to='/info'>我是老师</Link>
            </>
        );
    }
}
 
export default home;