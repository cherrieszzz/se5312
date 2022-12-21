import React from 'react';
import axios from 'axios';
class posts extends React.Component {
    state = {
        data: []
    }

    async componentDidMount() {
        const { data } = await axios.get('http://jsonplaceholder.typicode.com/posts')
        this.setState({ data })
        console.log(data)
    }

    render() {
        return (
            <>
                {this.state.data.length == 0 ? 'loading...' : ''}

                {this.state.data.map(post => {
                    return (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>

                    )
                })}
            </>
        );
    }
}

export default posts;

