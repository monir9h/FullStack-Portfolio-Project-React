import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1 className="logo">
        <Link to="/flowers">Top flowers</Link>
      </h1>
      <button>
        <Link to="/flowers/new">New Flower</Link>
      </button>
    </nav>
  );
}
