import React from 'react';
import axios from 'axios';
class addNew extends React.Component {
    state = {
        addNewData: {
            name: '',
            img_url: '',
            info: '',
            link: ''
        }
    }

    handleAddClick = () => {
        axios.post('http://localhost:8081/admin/stone/addstone',this.state.addNewData)
        this.props.history.push('/')  
    }

    handleChange = (e) => {
         const index = {...this.state.addNewData}
         index[e.currentTarget.name] = e.currentTarget.value
         this.setState({
            addNewData:index
         })
         console.log(this.state.addNewData)
    } 

    render() {
        return (
            <div className='container'>
                <h2>登陆</h2>
                <form >
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">用户名</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="formGroupExampleInput2" 
                            name="name"
                            value={this.state.addNewData.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">密码</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="formGroupExampleInput2" 
                            name="img_url"
                            value={this.state.addNewData.img_url}
                            onChange={this.handleChange}
                        />
                    </div>
                    {/* <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">赛事编号</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="formGroupExampleInput2" 
                            name="info"
                            value={this.state.addNewData.info}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">赛事等级</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="formGroupExampleInput2" 
                            name="link"
                            value={this.state.addNewData.link}
                            onChange={this.handleChange}
                        />
        </div>*/}
                    <button className='btn btn-primary' onClick={this.handleAddClick}>登陆</button> 
                </form>
            </div>
        );
    }
}

export default addNew;