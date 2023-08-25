import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function NewFlowerForm() {
  let navigate = useNavigate();

  const addFlower = (newFlower) => {
    axios
      .post(`${API}/flowers`, newFlower)
      .then(
        () => {
          navigate(`/flowers`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [flower, setFlower] = useState({
    name: "",
    price: "",
    country: "",
    url: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setFlower({ ...flower, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setFlower({ ...flower, is_favorite: !flower.is_favorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addFlower(flower);
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="Flower">Flower:</label>
        <input
          id="name"
          value={flower.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of the Flower"
          required
        />
        <label htmlFor="Country">Country of origin:</label>
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
    </div>
  );
}
