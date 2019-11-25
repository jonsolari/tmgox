import React, {Component} from "react";
import AlbumCard from './AlbumCard.js';

  
export class First5 extends Component {
  

render(){
  return (
    <div className="App">
      <AlbumCard
        url = 'https://api.discogs.com/releases/1601354'
      />
       <AlbumCard
        url = 'https://api.discogs.com/releases/1191772'
      />
       <AlbumCard
        url = 'https://api.discogs.com/releases/744810'
      />
       <AlbumCard
        url = 'https://api.discogs.com/releases/523351'
      />
       <AlbumCard
        url = 'https://api.discogs.com/releases/1217804'
      />
    </div>
  )
 }
}

export default First5;