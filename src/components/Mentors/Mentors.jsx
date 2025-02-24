import React from "react";
import { useNavigate } from "react-router-dom";
import "./mentors.css";

const mentors = [
  {
    id: 1,
    name: "John Doe",
    courses: 12,
    specialization: "Web Development",
    experience: "5 Years",
    // rating: 4.8,
    img: "./profile.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    courses: 8,
    specialization: "Data Science",
    experience: "3 Years",
    // rating: 4.6,
    img: "./profile.jpg",
  },
  {
    id: 3,
    name: "Mike Johnson",
    courses: 15,
    specialization: "Machine Learning",
    experience: "7 Years",
    // rating: 4.9,
    img: "./profile.jpg",
  },
  {
    id: 4,
    name: "Emily Brown",
    courses: 10,
    specialization: "Cyber Security",
    experience: "4 Years",
    // rating: 4.7,
    img: "./profile.jpg",
  },
  {
    id: 5,
    name: "Emily Brown",
    courses: 10,
    specialization: "Cyber Security",
    experience: "4 Years",
    // rating: 4.7,
    img: "./profile.jpg",
  },
  {
    id: 6,
    name: "Emily Brown",
    courses: 10,
    specialization: "Cyber Security",
    experience: "4 Years",
    // rating: 4.7,
    img: "./profile.jpg",
  },
];

const Mentors = () => {
    const navigate = useNavigate();
  return (
    <div className="mentor-container">
      <h1 className="title">Meet Our Mentors</h1>
      <div className="mentor-grid">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="mentor-card" onClick={() => alert(`Clicked on ${mentor.name}`)}>
            <div className="mentor-image">
              <img src={mentor.img} alt={mentor.name} />
            </div>
            <div className="mentor-info">
              <h3>{mentor.name}</h3>
              <p><strong>Specialization:</strong> {mentor.specialization}</p>
              <p><strong>Experience:</strong> {mentor.experience}</p>
              <p><strong>Courses:</strong> {mentor.courses}</p>
              <p className="rating">⭐ {mentor.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
