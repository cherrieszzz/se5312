import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class table extends React.Component {
    state = {
        table: [],
        delid: '',
    }

    async componentDidMount() {
        const {data : detail} = await axios.get('http://jsonplaceholder.typicode.com/posts/1/comments')
        console.log(detail)
        this.setState({
            table:detail
        })
        console.log(this.state.table)
    }

    handleClickDelete = (value) => {
        console.log("del fun running")
        // axios.post('http://localhost:8081/admin/stone/delete',value)
    }

    render() {
        if (this.state.table.length == 0) {
            return '正在从数据库中获取数据....'
        }
        return (
            <div className='container'>
                <table className="table">
                   <thead>
                        <tr>
                            <th scope="col">序号</th>
                            <th scope="col">编号</th>
                            <th scope="col">名字</th>
                            <th scope="col">邮箱</th>
                            <th scope="col">所在学院</th>
                        </tr>
                    </thead> 
                    <tbody>
                        {this.state.table.map(value => {
                            return (
                                <tr >
                                    <td>{value.postId}</td>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td><button className='btn btn-outline-primary btn-sm'><Link to={`/table1/${value._id}`}>更新</Link></button></td>
                                    <td><a className='btn btn-outline-danger btn-sm' onClick={() => { this.handleClickDelete(value) }}>删除</a></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default table