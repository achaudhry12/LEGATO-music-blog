import React from 'react';

export default function Artists(props) {
	const { artists } = props;

	return (
    <div>
      <h1>ARTISTS</h1>
      {artists.map((artists) => (
        <div>
          <img key={artists.id} src={artists.image_url} alt={artists.stage_name}></img>
          <br />
          <button>
            <h2 key={artists.id}>{artists.stage_name}</h2>
            <p key={artists.id}>{artists.full_name}</p>
          </button>
        </div>
      ))}
		</div>
	);
}
