import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Application pluralsight</h1>
      <Link to="about" className="btn btn-primary">
        About Page
      </Link>
    </div>
  );
}

export default HomePage;
