import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function FlowerDetails() {
  const [flower, setFlower] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/flowers/${id}`)
    .then((response) => {
      setFlower(response.data);
    });
  }, [id, navigate, API]);

  const deleteFlower = () => {
    axios
      .delete(`${API}/flowers/${id}`)
      .then(() => {
        navigate(`/flowers`);
      })
      .catch((c) => console.error("catch", c));
  };

  const handleDelete = () => {
    deleteFlower();
  };

  return (
    <>
      <div className="show">
        <img src={flower.url} alt={flower.name} />
    
        <p className="label">
          <span className="bold">Flower:</span> {flower.name}
        </p>
        <p className="label">
          <span className="bold">Price:</span> {flower.price}
        </p>
        <p className="label">
          <span className="bold">County:</span> {flower.country}
        </p>
        <p className="label">
          <span className="bold">Favorit:</span>{" "}
          {flower.is_favorite ? <span>⭐</span> : <span>✩</span>}
        </p>

        <div className="showNavigation">

          {/* <div>
            {" "}
            <Link to={`/flowers`}>
              <button>Back</button>
            </Link>
          </div> */}

          <div>
            <Link to={`/flowers/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
          <Link to={`/flowers`}>
        <button>Nevermind</button>
      </Link>
        </div>
      </div>
    </>
  );
}

export default FlowerDetails;
