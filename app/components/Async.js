import React from 'react';
import axios from 'axios';

class Async extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      posts: []
    };
  }

  componentWillMount() {
    console.log('componentWillMount!');
  }

  componentDidMount() {
    console.log('componentDidMount!');
    this.setState({
      loading: true
    });
    axios.get('https://jsonplaceholder.typicode.com/posts?userId=7')
    .then((response) => {
      console.log('response: ', response.data);
      this.setState({
        loading: false,
        posts: response.data
      });
    });
  }

  render() {
    console.log('render!');
    let rows = [];
    this.state.posts.forEach((post) => {
      rows.push(
        <li key={post.id}>User ID: {post.userId}, Title: {post.title}</li>
      );
    });

    return (
      <div>
        <h5>Posts from {this.props.guy}!</h5>
        {this.state.loading && <h1>Loading...</h1>}
        <ul>
          {rows}
        </ul>
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps! nextProps:', nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate! nextProps:', nextProps, ' nextState:', nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate! nextProps:', prevProps, ' nextState:', prevState);
  }
}

export default Async;
