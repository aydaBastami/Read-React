import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <>
        <div className="jumbotron">
            <h2>this page is not exist!</h2>
        <Link to="/">Go to Home page</Link>    
        </div>
        
        </>
    )
}
export default PageNotFound;