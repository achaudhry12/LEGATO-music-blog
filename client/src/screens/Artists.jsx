import React from 'react';

export default function Artists(props) {
	const { artists } = props;

	return (
    <div>
      <h3>ARTISTS</h3>
      {artists.map((artists) => (
        <p key={artists.id}>{artists.name}</p>
      ))}
		</div>
	);
}
