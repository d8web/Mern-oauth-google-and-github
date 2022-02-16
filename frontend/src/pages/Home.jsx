import Waterfall from "../components/Waterfall" // Component
import { Waterfalls } from "../data" // Array

const Home = () => {
    return (
        <div className="home">
            {Waterfalls.map(waterfall => (
                <Waterfall waterfall={waterfall} key={waterfall.id} />
            ))}
        </div>
    )
}

export default Home