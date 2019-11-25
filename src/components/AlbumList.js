import React, {Component} from 'react';
import axios from "axios";
import AlbumCard from './AlbumCard.js';

class AlbumList extends Component{
    state = {
      prices: [{}]
    }
  
componentDidMount(){
  const lps = [1601354, 1191772, 744810, 523351, 1217804];
  lps.map((id)=>
  axios.get(`https://api.discogs.com/releases/${id}`)
    .then(res => this.setState({records: res.data}))
    .catch(function (error) {
      console.log(error);
    })
  )
}

  render(){
    console.log(this.state.records);
      return(
        <div className="deck">
        {this.state.records.map(lp =>
        <div className="card">
        <AlbumCard
        key={lp.id}
        title={lp.title}
        lowest_price={lp.lowest_price}
        />
        </div>)}
        </div>
      )
    }   
  }

export default AlbumList;