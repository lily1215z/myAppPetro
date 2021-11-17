import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter
    }
  }

  inc = () => {
    if(this.state.counter < 50) {
        this.setState(state => ({
          counter: state.counter + 1
    }))
    }
  }

  dec = () => {
    if(this.state.counter > -50) {
      this.setState(state => ({
        counter: state.counter - 1
      }))
    }
  }

  rnd = () => {
    let max = 50;
    let min = -50;
    this.setState(state => ({
      // counter: +(Math.random() * (50 - -50) + -50).toFixed(0)   метод Петриченко
      counter: min + Math.floor(Math.random(state.counter) * (max - min + 1))
    }))
  }

  reset = () => {
    this.setState({
      counter: this.props.counter
    })
  }

  render() {
    const {counter} = this.state; 
    return (
      <div className="app">
        {/* <div className="counter">{this.state.counter}</div> */}
        <div className="counter">{counter}</div>
        <div className="controls">
          <button onClick={this.inc}>INC</button>
          <button onClick={this.dec}>DEC</button>
          <button onClick={this.rnd}>RND</button>
          <button onClick={this.reset}>RESET</button>
        </div>
      </div>
    )
  }
}

function App1() {
  return (<App counter={0} />);
}
export default App1;



