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

  }

  render() {
    return <SecuritySPA reviews={this.state.reviews} slides={this.state.slides} />
  }
}