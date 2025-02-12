import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-youtube";
import "videojs-http-source-selector";
import "./Coursevideo.css";

function Coursevideo() {
  const [activeTab, setActiveTab] = useState("about");
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const player = videojs(videoRef.current, {
        controls: true,
        responsive: true,
        fluid: true,
        playbackRates: [0.5, 1, 1.5, 2],
        controlBar: {
          volumePanel: { inline: false },
          pictureInPictureToggle: true,
          fullscreenToggle: true,
          playbackRateMenuButton: true,
        },
        sources: [
          {
            src: "/1.mp4",
            type: "video/mp4",
          },
        ],
      });

      player.ready(() => {
        var qualityLevels = player.qualityLevels();
        for (var i = 0; i < qualityLevels.levels_.length; i++) {
          qualityLevels.levels_[i].enabled = true;
        }
      });
      

      
    }
  }, []);

  return (
    <div className="videopage">
      <div className="vid-flex">
        <div className="course-container">
          <h2 className="heading">Explore Courses</h2>
          <div className="video-section">
            <video ref={videoRef} className="video-js vjs-default-skin" />
          </div>
          <h3 className="course-title">
            Animation is the Key of Successful UI/UX Design
          </h3>
          <div className="course-details">
            <img className="instructor-avatar" src="profile.jpg" alt="Instructor" />
            <span className="instructor-name">Emerson Siphron</span>
            <span className="course-category">UI UX Design · Apps Design</span>
          </div>
          <div className="course-meta">
            <span>⭐ 4.5 (500 Reviews)</span>
            <span>👥 500 Students</span>
            <span>📚 5 Modules</span>
            <span>⏳ 1h 30m</span>
            <span className="master-badge">Master</span>
          </div>
          <div className="tabs">
            {["about", "assignment", "tools", "review"].map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          <div className="tab-content">
            {activeTab === "about" && <p>This course covers animation techniques for UI/UX design.</p>}
            {activeTab === "notes" && <p>Assignments will be provided after each module.</p>}
            {activeTab === "tools" && <p>Tools like Figma, After Effects, and more will be covered.</p>}
            {activeTab === "review" && <p>Read reviews from past students.</p>}
          </div>
        </div>
        <div className="course-card">
          <p className="course-date">Today</p>
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
              <li><span className="module-index">1</span> Introduction <span className="module-duration">10:00</span></li>
              <li><span className="module-index">2</span> What is UX Design <span className="module-duration">10:00</span></li>
              <li><span className="module-index">3</span> Usability Testing <span className="module-duration">10:00</span></li>
              <li><span className="module-index">4</span> Create Usability Test <span className="module-duration">30:00</span></li>
              <li><span className="module-index">5</span> How to Implement <span className="module-duration">30:00</span></li>
            </ul>
          </div>
          <button className="detail-btn">Go To Detail</button>
        </div>
      </div>
    </div>
  );
}

export default Coursevideo;
