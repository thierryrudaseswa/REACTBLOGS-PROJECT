import {Link} from "react-router-dom"
const notFound=()=>{
    return(
        <div className="not-found">
            <h2>sorry</h2>
            <p>that page cannot be found </p>
            <Link to="/">back to homepage..</Link>
        </div>

    );
}
export default notFound;