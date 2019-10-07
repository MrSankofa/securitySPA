import React, { Component } from 'react'
import SecuritySPA from './SecuritySPA.jsx';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      slides: 0
    }
  }
  componentDidMount() {
    axios.get('/DummyYelpServer')
      .then(({ data }) => {
        this.setState({
          reviews: data.reviews,
          slides: data.reviews.length
        })
      })
      .catch(err => {
        console.log('Error in retrieve the reviews. Found in App.jsx ComponentDidMount')
        console.error(err)
        this.setState({
          reviews: [],
          slides: 0
        })
      })

  }

  render() {
    return <SecuritySPA reviews={this.state.reviews} slides={this.state.slides} />
  }
}