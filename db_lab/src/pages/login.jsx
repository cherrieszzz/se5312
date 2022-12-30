import React, { Component } from 'react';

class login extends Component {
    state = {}
    render() {
        return (
            <div className='row justify-content-center'>
                <form className='col-sm-4'>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">用户名</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">密码</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                    </div>
                    <button type="submit" className="btn btn-primary">登陆</button>
                </form>
            </div>
        );
    }
}

export default login;