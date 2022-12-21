import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Nav from './components/nav'
import Table from './components/table'
import data from './resource/data';
import data2 from './resource/data2';
import { Route, Router, Switch } from 'react-router-dom';
import Posts from './components/posts';
import Addnew from './components/addNew';
class App extends React.Component {
  state = {
    _data: data,
    data_sec : data2,
    input_str:''
  }
  handClick = () => {
    this.setState({
      _data: data
    })
    console.log(this.state._data)
  }
  handleChange =(e) => {
    console.log(e.currentTarget.value)
    this.setState({
      input_str:e.currentTarget.value
    })
  }
  getFormData = (e) => {
    const newData = this.state._data.push(e)
    this.setState({
      _data:newData
    })
    console.log(this.state._data)
  }
  render() {
    return (
      <div className="container">
        <div className='row m-4'>
          <div className='col-sm-3'>
            <Nav navClick={this.handClick} />
          </div>

          <div className='col-sm-9'>
              <Route path='/table1' 
                     render={() =>  <Table  tableName = {this.state._data} />} 
              />
              <Route path='/table2' 
                     render={() =>  <Table  tableName = {this.state.data_sec} />} 
              />
              <Route path='/post' component={Posts} />
              <Route path='/addNew' 
                     render={() =>  <Addnew  parent = {this}/>}
              />
            {/* <input value={this.state.input_str} onChange={this.handleChange}/> */}
            {/* <Table tableName = {this.state._data} /> */}
          </div>
        </div>
      </div>
    );
  }

}

export default App;
