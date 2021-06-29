import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Artists.css";

export default function Artists(props) {
  const { artists } = props;

  return (
    <div className="artist-body">
      <h1>ARTISTS</h1>
      <Link to="/artists/:id">
        {artists.map((artists) => (
          <div className="artist-container">
            <div className="artist-image-container">
            <img
              key={artists.id}
              src={artists.image_url}
              alt={artists.stage_name}
              ></img>
            </div>
            <br />
            <div className="artist-text-contianer">
            <h2 key={artists.id}>{artists.stage_name}</h2>
            <p key={artists.id}>{artists.full_name}</p>
            </div>
          </div>
        ))}
      </Link>
      <Link to="/artists/create">
        <button>ADD ARTIST</button>
      </Link>
    </div>
  );
}
