import React from 'react';

class addNew extends React.Component {
    state = {
        addNewData: {
            id: '',
            award_category: '',
            title: '',
            category: '',
            college: ''
        }
    }

    handleAddClick = () => {
        this.props.getFormData(this.state.addNewData)
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
            <>
                <h2>添加新数据</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput" className="form-label">序号</label>
                        <input 
                            onChange={this.handleChange}
                            type="text" 
                            className="form-control" 
                            id="formGroupExampleInput" 
                            name="id"
                            value={this.state.addNewData.id}   
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">奖项</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="formGroupExampleInput2" 
                            name="award_category"
                            value={this.state.addNewData.award_category}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">作品名称</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="formGroupExampleInput2" 
                            name="title"
                            value={this.state.addNewData.title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">类别</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="formGroupExampleInput2" 
                            name="category"
                            value={this.state.addNewData.category}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formGroupExampleInput2" className="form-label">学院</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="formGroupExampleInput2" 
                            name="college"
                            value={this.state.addNewData.college}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button className='btn btn-primary' onClick={this.handleAddClick}>添加</button>
                </form>
            </>

        );
    }
}

export default addNew;