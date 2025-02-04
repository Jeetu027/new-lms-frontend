import React, { useState } from "react";
import "./CreateAccount.css";

function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const isFormValid = email && password && confirmPassword && password === confirmPassword;

  return (
    <div className="container">
      <div className="left-pane">
        {/* <h1>Coursea</h1>
        <h2>Improve your skill with Coursea!</h2>
        <p>
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus, omnis
          voluptas assumenda est.
        </p> */}
      </div>
      <div className="right-pane">
        <h1>Create An Account</h1>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
        <form>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Input Area"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Input Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Your Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            disabled={!isFormValid}
            style={{
              backgroundColor: isFormValid ? "#f7941d" : "gray",
            }}
          >
            Create
          </button>
          <div className="terms">
            <input type="checkbox" required />
            <span>
              By clicking Create account, I agree that I have read and accepted
              the <a href="/terms">Terms of Use</a> and <a href="/privacy">Privacy Policy</a>.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
