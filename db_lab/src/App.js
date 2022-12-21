import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Nav from './components/nav'
import Table from './components/table'
import data from './resource/data';
import data2 from './resource/data2';
import { Route, Routes } from 'react-router-dom';
import Posts from './components/posts';
import Addnew from './components/addNew';
class App extends React.Component {
  state = {
    _data: data
  }
  handClick = () => {
    this.setState({
      _data: data
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
            <Routes>
              <Route path='/table1' 
                     render={(props) => {return <Table  tableName = {this.state._data} {...props}/>}} 
              />
              <Route path='/post' element={<Posts />} />
              <Route path='/addNew' element ={<Addnew />} />
            </Routes>
            {/* <Table tableName = {this.state._data} /> */}
          </div>
        </div>
      </div>
    );
  }

}

export default App;
