import React from "react";
import { Link } from "react-router-dom";


const NotFound: React.FC = () => {
  return (
    <div>
      <h2>opps! page not found </h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Back to Home page</Link>
    </div>
  );
}

export default NotFound;