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
          cover: `/img/${response.title}.jpg`,
          market: `http://www.discogs.com/sell/release/${response.id}`
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render(){
      
  return (
    <a href={this.state.market}>
    <div className="card">
    <img className="cover" src={this.state.cover} alt={this.state.title} />
    <p class="two"><strong>{this.state.title}</strong></p>
    <p>Lowest Price for LP:</p>
    <p class="price">{this.state.price}</p>
    </div></a>
  )}
}

export default AlbumCard; 