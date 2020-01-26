import React, { Component } from "react";

export class Analingus extends Component{

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
          cover: "/img/TabooVI.jpg",
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
        <div className="card">
            <img className="cover" src="/img/TabooVI.jpg" alt={this.state.title} />
            <h1>{this.state.title}</h1>
            <br/>
            <p>Lowest Price: <a class="price" href={this.state.market}>{this.state.price}</a></p>
            <h2>‏‏‎ ‎</h2>
        </div>
  )}
}

export default Analingus 