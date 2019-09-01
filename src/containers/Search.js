import React, { Component } from 'react'
import axios from 'axios'

import Suggestions from '../components/Suggestions'

const API_KEY = 'c168a43a';
const API_URL = 'http://www.omdbapi.com/'

class Search extends Component {
  state = {
    error: false,
    query: '',
    results: []
  }

  getInfo = () => {
    // axios.get(`http://www.omdbapi.com/?apikey=c168a43a&t=${this.state.query}`)
    axios.get(`${API_URL}?apikey=${API_KEY}&t=${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data.data
        })
      })
      .catch(() => this.setState({ error: true }))
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        // this.showDropdown()
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
        // this.hideDropdown()
      }
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search