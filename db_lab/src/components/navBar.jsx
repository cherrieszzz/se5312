import React, { Component } from 'react';
import logo from '../resource/logo192.png'

class navBar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light pl-3">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="30" height="30" class="d-inline-block align-text-top" />
                        竞赛信息管理系统
                    </a>
                </div>
            </nav>
        );
    }
}

export default navBar;