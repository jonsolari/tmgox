import React, { Component } from "react";

export class Variant extends Component{

  constructor(props) {
    super(props);
    this.state = {
        color: props.color
    };
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
    console.log(this.state);
    return (
        <div className={this.state.color}>
            <img className="cover" src={this.state.cover} alt={this.state.title} />
            <h1>{this.state.title}</h1>
            <h2><em>({this.state.color} variant)</em></h2>
            <br/>
            <p>Lowest Price: <a class="price" href={this.state.market}>{this.state.price}</a></p>
        </div>
  )}
}

export default Variant 