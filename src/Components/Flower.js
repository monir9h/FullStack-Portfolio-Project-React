
import { Link } from "react-router-dom"

export default function Flower({ flower }) {
    return (
        <div className="flower">
            <img src={flower.url} alt={flower.name} />
            <p className="label"><span className="bold">Favorit:</span> {flower.is_favorite ? (
                <span>⭐</span>
            ) : (
                <span>✩</span>
            )}</p>
            <Link to={`/flowers/${flower.id}`}><span className="bold">Flower:</span> {flower.name}</Link>
            <p className="label"><span className="bold">County of origin:</span> {flower.country}</p>
        </div>
    )
}