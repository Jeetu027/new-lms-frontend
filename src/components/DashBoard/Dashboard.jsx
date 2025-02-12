import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Title
);

import { useParams } from "react-router-dom";

function Dashboard() {
 
  const navigate = useNavigate();
  const [courseProgress, setCourseProgress] = useState(80);
  

 

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
    
  ];

  const chartData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "Hours Spent",
        data: [1, 3, 2, 4, 3.5, 2, 3],
        fill: false,
        backgroundColor: "#ffa726",
        borderColor: "#333",
        tension: 0.45,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
        title: {
          display: true,
          text: "Hours",
          color: "#666",
        },
      },
      x: {
        title: {
          display: true,
          text: "Days",
          color: "#666",
        },
      },
    },
  };

  return (
    <div className="dashboard">
      <div className="main-content">
        <div className="user-flex">
          <div>
            <div className="username-flex">
              <p>Hi, Jeet!</p>
            </div>
            <div className="learn">Let’s learn something new today!</div>
          </div>
          <div className="profile">
            <div className="profile-img" onClick={() => navigate("/profile")}>
              <img src="profile.jpg" alt="profile" />
            </div> 
          </div>
        </div>

        <div className="chart-progress-flex">
          <div className="chart">
            <h3>Weekly Activity</h3>
            <div className="chart-container">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>

          <div className="progress-card">
            <div className="progress-info">
              <h3>Course Progress</h3>
              <div className="progress-flex">
                <div className="cureent-progress">
                  <span className="completed-value">{courseProgress}%</span>
                </div>
                <div className="secondary-flex">
                  <div className="progress-bar">
                    <svg viewBox="0 0 36 36" className="circular-chart">
                      <path
                        className="circle-bg"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="circle"
                        strokeDasharray={`${courseProgress}, 100`}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                  </div>
                  <span className="percentage-value">{courseProgress}%</span>
                  <span className="total-value">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="course-card-list">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="card-image">
                <img src={course.image} alt="Course" />
                <span className="badge">{course.badge}</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">{course.title}</h3>
                <div className="card-author">
                  <img src={course.authorImage} alt="Author" className="author-image" />
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

      {/* Course Section */}
      {/* <div className="current-course-section"> */}
      <div className="course-card">
      <p className="course-date">Today</p>
      {/* <div className="course-image">
        <img src="./image4.png" alt="Course" />
        <span className="badge">Beginner</span>
      </div> */}
      <h3 className="course-title">UX Design : How To Implement Usability Testing</h3>
      <p className="course-author">Alfredo Rhiel Madsen</p>
      <div className="course-stats">
        <span>📚 500 Students</span>
        <span>📖 5 Modules</span>
        <span>⏳ 1h 30m</span>
      </div>
      <div className="course-progress">
        <p className="progress-status">0/5 Done</p>
        <ul className="module-list">
          <li>
            <span className="module-index">1</span> Introduction <span className="module-duration">10:00</span>
          </li>
          <li>
            <span className="module-index">2</span> What is UX Design <span className="module-duration">10:00</span>
          </li>
          <li>
            <span className="module-index">3</span> Usability Testing <span className="module-duration">10:00</span>
          </li>
          <li>
            <span className="module-index">4</span> Create Usability Test <span className="module-duration">30:00</span>
          </li>
          <li>
            <span className="module-index">5</span> How to Implement <span className="module-duration">30:00</span>
          </li>
        </ul>
      </div>
      <button className="detail-btn">Go To Detail</button>
    </div>
      {/* </div> */}
    </div>
  );
}

export default Dashboard;
