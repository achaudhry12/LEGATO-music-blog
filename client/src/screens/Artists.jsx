import React from 'react';
import { Link } from 'react-router-dom';

export default function Artists(props) {
	const { artists } = props;

	return (
    <div>
      <h1>ARTISTS</h1>
      {artists.map((artists) => (
        <Link to='/artists/:id'>
          <img key={artists.id} src={artists.image_url} alt={artists.stage_name}></img>
          <br />
          <h2 key={artists.id}>{artists.stage_name}</h2>
          <p key={artists.id}>{artists.full_name}</p>
        </Link>
      ))}
      <Link to='/artists/new'>
        <button>
          ADD ARTIST
        </button>
      </Link>
		</div>
	);
}
