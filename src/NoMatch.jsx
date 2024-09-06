import { Link } from "react-router-dom";

export default function NoMatch() {
    return (
        <div>
            <h2>Congratulations! You found a LUCKY LINK (also known as a 404 error)</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    )
}