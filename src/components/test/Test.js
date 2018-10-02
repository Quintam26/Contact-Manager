import React, { Component } from 'react';

class Test extends Component {

  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => 
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  };

  // componentWillMount() {
  //   console.log('comps will mount')
  // };

  // componentDidUpdate() {
  //   console.log('comps did update')
  // };

  // componentWillUpdate() {
  //   console.log('comps will update')
  // };

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log('comps will recieve props')
  // };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     test: 'car'
  //   };
  // };

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('get snapshot before update')
  // };
  
  render () {
    const { title, body } = this.state;

    return (
      <div>
        <h1 className="display-4">{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}

export default Test;