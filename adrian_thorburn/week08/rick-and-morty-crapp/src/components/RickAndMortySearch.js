import React, { Component } from 'react';
import { getCharacter } from 'rickmortyapi'
import axios from 'axios'





// const aliveRicks = await getCharacter({
//   name: 'rick',
//   status: 'alive'
// })


class RickAndMortySearch extends Component {
  constructor() {
  super();
  this.state = {query: ''};
  }

  _onSubmit = (event) => {
    event.preventDefault();
    this.searchCharacters(this.state.query)
  }

  searchCharacters = (char) => {
    let charURL = `https://rickandmortyapi.com/api/character/?name=${char}`
    axios.get(charURL).then(function(response) {
      console.log(response.image);
    })
  }

  _onInput = (event) => {
    this.setState({query: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this._onSubmit}>
        <input type="search" placeholder="Morty" required onInput={this._onInput} />
        <input type="submit" value="Search" />
      </form>
    )
  };
}

export default RickAndMortySearch;
