import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function FlowerEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [flower, setFlower] = useState({
    name: "",
    price: "",
    country: "",
    url: "",
    is_favorite: false,
  });

  const updateFlower = (updatedFlower) => {
    axios
      .put(`${API}/flowers/${id}`, updatedFlower)
      .then(
        () => {
          navigate(`/flowers/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setFlower({ ...flower, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setFlower({ ...flower, is_favorite: !flower.is_favorite });
  };

  useEffect(() => {
    axios.get(`${API}/flowers/${id}`).then(
      (response) => setFlower(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateFlower(flower, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Flower">Flower:</label>
        <input
          id="name"
          value={flower.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of the flower"
          required
        />
        <label htmlFor="Country">Country:</label>
        <input
          id="country"
          value={flower.country}
          type="text"
          onChange={handleTextChange}
          placeholder="Country"
          required
        />
        <label htmlFor="Price">Price:</label>
        <input
          id="price"
          value={flower.price}
          type="number"
          onChange={handleTextChange}
          placeholder="Price"
          required
        />
        <label htmlFor="url">Image URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={flower.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="is_favorite">Favorite:</label>
        <input
          id="is_favorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={flower.is_favorite}
        />

        <br />

        <input type="submit" />
      </form>

      {/* <Link to={`/flowers/${id}`}>
        <button>Nevermind!</button>
      </Link> */}

    </div>
  );
}

