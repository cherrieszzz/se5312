import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import React from 'react';
import './App.css';
import Table from './components/table'
import data from './resource/data';
import data2 from './resource/data2';
import { Route, Router, Switch } from 'react-router-dom';
import Posts from './components/posts';
import Addnew from './components/addNew';
import UpDate from './components/upDate';
import NavBar from './components/navBar';
import Information from './pages/information';
import Home from './pages/home'

class App extends React.Component {
  state = {
    _data: data,
    data_sec: data2,
    input_str: '',
    backend_data: {}
  }

  async componentDidMount() {
    // const detial = await axios.get('http://localhost:8081/api/stones')
    // this.setState({
    //   backend_data: detial.data
    // })
  }

  handClick = () => {
    this.setState({
      _data: data
    })
  }

  getFormData = (e) => {
    const newData = this.state._data.push(e)
    this.setState({
      _data: newData
    })
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
            <Route path='/' component={Home} exact/>
            <Route path='/table1/:_id' component={UpDate} />
            <Route path='/post' component={Posts} />
            <Route path='/addNew' exact
              render={(props) => <Addnew parent={this} {...props} />}
            />
            <Route path='/info' component={Information} />
            {/* <input value={this.state.input_str} onChange={this.handleChange}/> */}
            {/* <Table tableName = {this.state._data} /> */}
          </div>
      </>

    );
  }

}

export default App;
