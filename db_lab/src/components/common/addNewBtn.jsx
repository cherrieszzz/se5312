import React from 'react';
import { Link } from 'react-router-dom';

class addNewBtn extends React.Component {
    state = {  } 
    render() { 
        return (
                <Link to='/addNew' className='btn btn-primary btn-sm'>添加</Link>
        );
    }
}
 
export default addNewBtn;