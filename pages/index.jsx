import React from 'react'
import {connect} from 'react-redux'
import {
  decrementCounter,
  incrementCounter,
  fetchPracticeData,
} from '../redux/actions/counterActions'

class App extends React.Component {
  static getInitialProps({store}) {}

  render() {
    const {data} = this.props
    return (
      <div>
        <button onClick={this.props.incrementCounter}>Increment</button>
        <button onClick={this.props.decrementCounter}>Decrement</button>
        <h1>{this.props.counter}</h1>
        {data && data.map((item) => <p key={item.id}>{item.name}</p>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.value,
  data: state.counter.data,
})

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
  fetchPracticeData,
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
