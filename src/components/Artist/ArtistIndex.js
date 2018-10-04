import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ArtistCard from './ArtistCard';

class ArtistIndex extends React.Component {
  constructor() {
    super();
    this.state = {artists: []};

  }

  componentDidMount(){
    axios.get('/api/artists')
      .then(res => this.setState({ artists: res.data }));
  }

  render() {
    return (
      <div>
        <h1> Artist </h1>
        <ul className="columns is-multiline">
          {this.state.artists.map(artist =>
            <li
              className="column is-one-quarter-desktop is-one-third-tablet"
              key={artist._id}
            >
              <Link to={`/artists/${artist._id}`}>
                <ArtistCard {...artist} />
              </Link>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ArtistIndex;