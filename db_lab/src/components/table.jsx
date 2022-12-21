import React from 'react';
import data from '../resource/data';
import data2 from '../resource/data2';
import Addnew from './common/addNewBtn';
class table extends React.Component {
    state = {
        table: this.props.tableName,
        delid: '',
      
    }

    handleClick = (value) => {
        var newTable = this.state.table.filter((del) => {
            return del != value
        })
        this.setState({
            table: newTable
        })
    }

    render() {
        console.log(this.state.table)
        return (
            <>
                <Addnew />
                <p>共{this.state.table.length}条结果</p> 
                <table className="table">
                    {/* <thead>
                        <tr>
                            <th scope="col">序号</th>
                            <th scope="col">获奖类别</th>
                            <th scope="col">作品名称</th>
                            <th scope="col">类别</th>
                            <th scope="col">所在学院</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {this.state.table.map(value => {
                            return (
                                <tr >
                                    {
                                        Object.keys(value).map(index => {
                                            return (
                                                <td>{value[index]}</td>
                                            )
                                        })
                                    }
                                    <td><a className='btn btn-outline-danger btn-sm' onClick={() => { this.handleClick(value) }}>删除</a></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>

        );
    }
}

export default table