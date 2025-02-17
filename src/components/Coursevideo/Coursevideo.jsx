import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-youtube";
import "videojs-http-source-selector";
import "./Coursevideo.css";

function Coursevideo() {
  const [activeTab, setActiveTab] = useState("about");
  const [notes, setNotes] = useState([]); // Store notes
  const [noteInput, setNoteInput] = useState(""); // Note input field
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const textareaRef = useRef(null); // Ref for text area

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

  // adding notes
  const addNote = () => {
    if (noteInput.trim() !== "") {
      setNotes([...notes, noteInput]);
      setNoteInput(""); // Clear input after adding
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const formatText = (text) => {
    return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={index}>{part.slice(2, -2)}</strong>; // Remove ** and bold the text
      }
      return <span key={index}>{part}</span>; // Keep normal text intact
    });
  };

  // Function to make selected text bold when clicking the "B" button
  const makeBold = () => {
    if (!textareaRef.current) return;
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    if (start === end) return; // No text selected

    const selectedText = noteInput.slice(start, end);
    const beforeText = noteInput.slice(0, start);
    const afterText = noteInput.slice(end);

    // Wrap selected text in "**" for bold effect
    setNoteInput(`${beforeText}**${selectedText}**${afterText}`);

    // Set focus back to textarea
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start, end + 4);
    }, 0);
  };

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
            <img
              className="instructor-avatar"
              src="profile.jpg"
              alt="Instructor"
            />
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
            {["about", "notes", "tools", "review"].map((tab) => (
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
            {activeTab === "about" && (
              <p>This course covers animation techniques for UI/UX design.</p>
            )}
            {activeTab === "notes" && (
              <div className="notes-section">
                <h4>Your Notes</h4>
                <textarea
                  ref={textareaRef}
                  className="note-input"
                  value={noteInput}
                  onChange={(e) => setNoteInput(e.target.value)}
                  placeholder="Write your notes here... Select text & click 'B' to bold."
                ></textarea>
                <div className="note-buttons">
                  <button className="bold-btn" onClick={makeBold}>
                    <b>B</b>
                  </button>
                  <button className="add-note-btn" onClick={addNote}>
                    Add Note
                  </button>
                </div>
                <ul className="notes-list">
                  {notes.map((note, index) => (
                    <li key={index} className="note-item">
                      <div>{formatText(note)}</div>
                      <div>
                        <button
                          className="delete-note-btn"
                          onClick={() => deleteNote(index)}
                        >
                          🗑️
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === "tools" && (
              <p>Tools like Figma, After Effects, and more will be covered.</p>
            )}
            {activeTab === "review" && <p>Read reviews from past students.</p>}
          </div>
        </div>
        <div className="course-card-2">
          <p className="course-date">Today</p>
          <h3 className="course-title">
            UX Design : How To Implement Usability Testing
          </h3>
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
                <span className="module-index">1</span> Introduction{" "}
                <span className="module-duration">10:00</span>
              </li>
              <li>
                <span className="module-index">2</span> What is UX Design{" "}
                <span className="module-duration">10:00</span>
              </li>
              <li>
                <span className="module-index">3</span> Usability Testing{" "}
                <span className="module-duration">10:00</span>
              </li>
              <li>
                <span className="module-index">4</span> Create Usability Test{" "}
                <span className="module-duration">30:00</span>
              </li>
              <li>
                <span className="module-index">5</span> How to Implement{" "}
                <span className="module-duration">30:00</span>
              </li>
              <li>
                <span className="module-index">4</span> Create Usability Test{" "}
                <span className="module-duration">30:00</span>
              </li>
            </ul>
          </div>
          <button className="detail-btn">Go To Detail</button>
        </div>
      </div>
    </div>
  );
}

export default Coursevideo;
