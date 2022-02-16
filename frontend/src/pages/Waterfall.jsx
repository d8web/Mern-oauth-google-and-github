import { useLocation } from "react-router-dom"
import { Waterfalls } from "../data"

const Waterfall = () => {

    const location = useLocation()
    
    const id = location.pathname.split("/")[2]
    const waterfall = Waterfalls.find(item => item.id === parseInt(id))

    return (
        <div className="waterfall-container">
            <img src={`/waterfalls/${waterfall.image}`} className="waterfall-img" alt="" />
            <div className="waterfall-info-area">
                <h1 className="waterfall-title">{waterfall.name}</h1>
                <p className="waterfall-desc">{waterfall.smallDescription}</p>
                <p className="long-waterfall-desc">{waterfall.longDescription}</p>
            </div>
        </div>
    )
}

export default Waterfall