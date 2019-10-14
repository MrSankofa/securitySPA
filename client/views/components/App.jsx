import React, { Component } from 'react'
import SecuritySPA from './SecuritySPA.jsx';
import axios from 'axios';
import packageData from '../../../data/packageData.js';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      slides: 0,
      packages: packageData,
      defaultPackage: '4',
    }
    this.getPackage = this.getPackage.bind(this);
    this.getNumberRowsNeeded = this.getNumberRowsNeeded.bind(this);
    this.getDataRows = this.getDataRows.bind(this);
  }

  getPackage(typeOfPackage) {
    this.setState({
      defaultPackage: typeOfPackage
    })
  }

  getNumberRowsNeeded(array) {
    return Math.ceil(array.length / 3);
  }

  // used for the NestedGrid to display rows of data of three columns
  getDataRows(array) {
    let copy = array.slice();

    const result = [];

    let numberOfRows = this.getNumberRowsNeeded(array);

    while (numberOfRows > 0) {
      result.push(copy.slice(0, 3));
      copy = copy.slice(3);
      numberOfRows--;
    }
    return result;

  }


  componentDidMount() {
    // once business has Yelp reviews change get request to: https://api.yelp.com/v3/businesses/xAG4O7l-t1ubbwVAlPnDKg/reviews
    // you willneed to send this GET request with a Bearer Token that you can generate from the yelp website
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
    return <SecuritySPA reviews={this.state.reviews} slides={this.state.slides} packages={this.state.packages} getPackage={this.getPackage} defaultPackage={this.state.defaultPackage} getDataRows={this.getDataRows} />
  }
}