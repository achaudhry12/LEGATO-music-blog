import React from 'react';

export default function Artists(props) {
	const { artists } = props;

	return (
		<div>
			<h3>Flavors</h3>
			{flavors.map((artists) => (
				<p key={artists.id}>{artists.name}</p>
			))}
		</div>
	);
}