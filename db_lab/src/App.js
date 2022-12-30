import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React from 'react';
import './App.css';
import Table from './components/table'
import { Route, Router, Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import Login from './pages/login';
class App extends React.Component {
  state = {
  }

  render() {
    return (
      <>
        <NavBar />
          <div className='row m-4'>
            <Route path='/table1'
              render={() => <Table />}
              exact
            />
            <Route path='/table2'
              render={() => <Table />}
            />
            <Route path='/login' component={Login} />
            {/* <input value={this.state.input_str} onChange={this.handleChange}/> */}
            {/* <Table tableName = {this.state._data} /> */}
          </div>
      </>

    );
  }

}

export default App;
