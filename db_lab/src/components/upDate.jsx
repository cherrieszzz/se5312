import React from 'react';
import axios from 'axios';
class upDate extends React.Component {
    state = {
        addNewData: {
            _id:this.props.match.params._id,
            name: '',
            img_url: '',
            info: '',
            link: ''
        }
    }

    handleAddClick = () => {
        console.log(this.state.addNewData)
        axios.post('http://localhost:8081/admin/stone/update',this.state.addNewData)
        this.props.history.push('/table1')  
    }

    handleChange = (e) => {
         const index = {...this.state.addNewData}
         index[e.currentTarget.name] = e.currentTarget.value
         this.setState({
            addNewData:{
                _id:this.props.match.params._id,
                name:index.name,
                img_url:index.img_url,
                info:index.info,
                link:index.link
            }
         })
         console.log(this.state.addNewData)
    } 

    render() {
        console.log(this.props.match.params._id)
        return (
            <>
                <h2>更新数据</h2>
                <form >
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">名字</label>
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
                        <label htmlFor="formGroupExampleInput2" className="form-label">图片地址</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="formGroupExampleInput2" 
                            name="img_url"
                            value={this.state.addNewData.img_url}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">info</label>
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
                        <label htmlFor="formGroupExampleInput2" className="form-label">link</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="formGroupExampleInput2" 
                            name="link"
                            value={this.state.addNewData.link}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className='btn btn-primary' onClick={this.handleAddClick}>添加</button>
                </form>
            </>

        );
    }
}

export default upDate;