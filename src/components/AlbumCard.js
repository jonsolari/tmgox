import React, { Component } from "react";

export class AlbumCard extends Component{

  constructor(props) {
    super(props);
    this.state = {};
    this.album(props.url);
  }

  
  album(url) {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          title: response.title,
          artist: "the Mountain Goats",
          price: response.lowest_price ? `$${response.lowest_price}` : "Not Available.",
          cover: response.images.uri ? response.images.uri : `/img/${response.title}.jpg`
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render(){
      console.log(this.state);
  return (
    <div className="card">
    <img className="cover" src={this.state.cover} alt={this.state.title} />
    <h1>{this.state.title}</h1>
    <h2>
      <em>{this.state.artist}</em>
    </h2>
    <p>Lowest Price for LP: {this.state.price}</p>
    </div>
  )}
}

export default AlbumCard; 