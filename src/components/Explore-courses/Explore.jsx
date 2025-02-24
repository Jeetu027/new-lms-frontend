import React from "react";
import { useNavigate } from "react-router-dom";
import "./Explore.css";

function Explore() {
  const navigate = useNavigate();

  const courses = [
    {
      title: "Creating Beautiful Landing Page in 1 Hour",
      author: "Barbhaya Jeet",
      students: "500 Students",
      modules: "5 Modules",
      duration: "1h 30m",
      image: "./image4.png",
      authorImage: "profile.jpg",
      badge: "Beginner",
    },
    {
      title: "Mastering React in 2 Weeks",
      author: "John Doe",
      students: "1,000 Students",
      modules: "10 Modules",
      duration: "5h 20m",
      image: "./image4.png",
      authorImage: "profile.jpg",
      badge: "Intermediate",
    },
    {
      title: "Mastering React in 2 Weeks",
      author: "John Doe",
      students: "1,000 Students",
      modules: "10 Modules",
      duration: "5h 20m",
      image: "./image4.png",
      authorImage: "profile.jpg",
      badge: "Intermediate",
    },
    {
      title: "Mastering React in 2 Weeks",
      author: "John Doe",
      students: "1,000 Students",
      modules: "10 Modules",
      duration: "5h 20m",
      image: "./image4.png",
      authorImage: "profile.jpg",
      badge: "Intermediate",
    },
    {
      title: "Mastering React in 2 Weeks",
      author: "John Doe",
      students: "1,000 Students",
      modules: "10 Modules",
      duration: "5h 20m",
      image: "./image4.png",
      authorImage: "profile.jpg",
      badge: "Intermediate",
    },
    {
      title: "Mastering React in 2 Weeks",
      author: "John Doe",
      students: "1,000 Students",
      modules: "10 Modules",
      duration: "5h 20m",
      image: "./image4.png",
      authorImage: "profile.jpg",
      badge: "Intermediate",
    },
  ];

  return (
    <div className="explore">
      <div className="title-flex">
        <div className="title">
          <p>Explore Courses</p>
        </div>
        <div className="profile">
          <div className="profile-img" onClick={() => navigate("/profile")}>
            <img src="profile.jpg" alt="profile" />
          </div>
        </div>
      </div>
      <div className="course-card-list">
        {courses.map((course, index) => (
          <div
            className="course-card"
            key={index}
            onClick={() => navigate("/video")}
          >
            <div className="card-image">
              <img src={course.image} alt="Course" />
              <span className="badge">{course.badge}</span>
            </div>
            <div className="card-content">
              <h3 className="card-title">{course.title}</h3>
              <div className="card-author">
                <img
                  src={course.authorImage}
                  alt="Author"
                  className="author-image"
                />
                <p className="author-name">{course.author}</p>
              </div>
              <div className="card-stats">
                <p>{course.students}</p>
                <p>{course.modules}</p>
                <p>{course.duration}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
