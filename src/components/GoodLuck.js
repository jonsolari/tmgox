import React, {Component} from "react";
import ReleaseCard from './ReleaseCard.js';
import Analingus from './Analingus.js';
import Variant from './Variant.js';

  
class GoodLuck extends Component {
  

render(){
  return (
    <div className="App">
      <Analingus
        url = 'https://api.discogs.com/releases/2767923'
      />
      <ReleaseCard
        url = 'https://api.discogs.com/releases/769960'
      />
      <ReleaseCard
        url = 'https://api.discogs.com/releases/2873969'
      />
      <Variant
        url = 'https://api.discogs.com/releases/4880289'
        color = "yellow"
      />
      <Variant
        url = 'https://api.discogs.com/releases/5118937'
        color = "green"
      />
    </div>
  )
 }
}

export default GoodLuck;


