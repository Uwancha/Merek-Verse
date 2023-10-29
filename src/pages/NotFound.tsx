import React from "react";
import { Link } from "react-router-dom";
import "../styles/notfound.css"


const NotFound: React.FC = () => {
  return (
    <div className="notfound">
      <h2>opps! page not found </h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Back to Home page</Link>
    </div>
  );
}

export default NotFound;