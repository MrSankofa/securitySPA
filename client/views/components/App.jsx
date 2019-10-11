import React, { Component } from 'react'
import SecuritySPA from './SecuritySPA.jsx';
import axios from 'axios';
import packageData from '../../../data/packageData.js';
console.log('packageData: ', packageData);
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      slides: 0,
      packages: packageData,
      defaultPackage: '4'
    }
    this.getPackage = this.getPackage.bind(this);
  }

  getPackage(typeOfPackage) {
    console.log('typeOfPackage: ', typeOfPackage);
    this.setState({
      defaultPackage: typeOfPackage
    })
  }
  componentDidMount() {
    axios.get('/DummyYelpServer')
      .then(({ data }) => {
        this.setState({
          reviews: data.reviews,
          slides: data.reviews.length,
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
    return <SecuritySPA reviews={this.state.reviews} slides={this.state.slides} packages={this.state.packages} getPackage={this.getPackage} defaultPackage={this.state.defaultPackage} />
  }
}