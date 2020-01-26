import React, {Component} from "react";
import ReleaseCard from './ReleaseCard.js';

  
class EPs extends Component {
  

render(){
  return (
    <div className="App">
      <ReleaseCard
        url = 'https://api.discogs.com/releases/1625208'
      />
      <ReleaseCard
        url = 'https://api.discogs.com/releases/1625203'
      />
      <ReleaseCard
        url = 'https://api.discogs.com/releases/1210894'
      />
      <ReleaseCard
        url = 'https://api.discogs.com/releases/1526609'
      />
      <ReleaseCard
        url = 'https://api.discogs.com/releases/1516102'
      />
      <ReleaseCard
        url = 'https://api.discogs.com/releases/1763341'
      />
    </div>
  )
 }
}

export default EPs;

