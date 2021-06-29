import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function FoodEdit(props) {
	const [formData, setFormData] = useState({
    stage_name: "",
    full_name: "",
    image_url: "",
  });
  const { stage_name, full_name, image_url } = formData;
	const { artists, handleUpdate, handleDelete } = props;
	const { id } = useParams();

	useEffect(() => {
		const prefillFormData = () => {
			const singleArtist = artists.find((artist) => artist.id === Number(id));
			setFormData({
        stage_name: singleArtist.stage_name,
        full_name: singleArtist.full_name,
        image_url: singleArtist.image_url,
			});
		};
		if (artists.length) {
			prefillFormData();
		}
	}, [artists]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

  return (
    <>
      <br />
      <div className="container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate(formData);
          }}
        >
          <h2>EDIT ARTIST</h2>
          <div className="text-field">
            <label>
              <p>Stage Name</p>
              <input
                type="text"
                name="stage_name"
                value={stage_name}
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <div className="text-field">
            <label>
              <p>Full Name</p>
              <input
                type="text"
                name="full_name"
                value={full_name}
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <div className="text-field">
            <label>
              <p>Image URL</p>
              <input
                type="text"
                name="image_url"
                value={image_url}
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <button className="submit-button">SUBMIT</button>
          <br />
          <button className="register-button" onClick={() => handleDelete(artists.id)}>DELETE</button>
        </form>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}
