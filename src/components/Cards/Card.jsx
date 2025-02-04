import React from "react";
import "./Card.css"; // Link to your CSS file

function CourseCard() {
  return (
    <div className="course-card">
      <div className="card-image">
        <img
          src="https://via.placeholder.com/300x150" // Replace with your image URL
          alt="Course"
        />
        <span className="badge">Beginner</span>
      </div>
      <div className="card-content">
        <h3 className="card-title">Creating Beautiful Landing Page in 1 Hour</h3>
        <div className="card-author">
          <img
            src="https://via.placeholder.com/40" // Replace with author image
            alt="Author"
            className="author-image"
          />
          <p className="author-name">Lincoln George</p>
        </div>
        <div className="card-rating">
          <span className="star">⭐</span> <p>4.5</p>
        </div>
        <div className="card-stats">
          <p>500 Students</p>
          <p>5 Modules</p>
          <p>1h 30m</p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
