import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      content: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   handleChange = (e) => {
    this.setState({content: e.target.value})
  }
  handleSubmit(event) {
    axios.post("http://localhost:3000/post", {content: "new content"})
    .then(console.log)
    
    event.preventDefault();
  }

  componentDidMount() {
    axios.get("http://localhost:3000/post")
    .then(res => res.data.map(item => <p></p>))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <form onSubmit={this.handleSubmit}>
        <label>
          Content:
          <input type="text" value={this.state.content} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
          
         
        </header>
      </div>
    );
  }
}

export default App;
