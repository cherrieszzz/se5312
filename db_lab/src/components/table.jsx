import React from 'react';
import data from '../resource/data';
import data2 from '../resource/data2';
import Addnew from './common/addNewBtn';
import { Link } from 'react-router-dom';
import axios from 'axios';
class table extends React.Component {
    state = {
        table: [],
        delid: '',
    }

    async componentDidMount() {
        const detail = await axios.get('http://localhost:8081/api/stones')
        this.setState({
            table:detail.data['stones']
        })
    }

    handleClickDelete = (value) => {
        console.log("del fun running")
        axios.post('http://localhost:8081/admin/stone/delete',value)
    }

    render() {
        if(this.state.table.length == 0) {
            return '正在从数据库中获取数据....'
        }
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
                                    <td><button className='btn btn-outline-primary btn-sm'><Link to={`/table1/${value._id}`}>更新</Link></button></td>
                                    <td><a className='btn btn-outline-danger btn-sm' onClick={() => { this.handleClickDelete(value) }}>删除</a></td>
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