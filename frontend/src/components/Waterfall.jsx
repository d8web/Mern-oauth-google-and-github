import { Link } from "react-router-dom"

const Waterfall = ({ waterfall }) => {
    return (
        <div className="waterfall-area">
            <Link className="link-waterfall" to={`/waterfall/${waterfall.id}`}>
                <span className="title">{waterfall.name}</span>
                <img src={`/waterfalls/${waterfall.image}`} className="img" alt=""/>
                <p className="desc">{waterfall.smallDescription}</p>
                <button className="button">Ver mais</button>
            </Link>
        </div>
    )
}

export default Waterfall