import React, { useState } from "react";

import './log.css'

function Log() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const togglePasswordVisibility = (event) => {
   
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

 
    
    
    if (!email || !password) {
        setEmailError("Please fill in all fields.");
      return;
    }
  
  
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }
  
    console.log("Email:", email);
    console.log("Password:", password);
  
  };
  
  

  return (
    <div className="signin-container">
      {/* Left Section */}
      <div className="signin-left">
        <div className="branding">
          {/* <div className="logo">
            <img src="/path-to-your-logo.png" alt="Logo" />
          </div> */}
          {/* <h1>Improve your skill with Coursea!</h1>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est.
          </p> */}
        </div>
      </div>

      {/* Right Section */}
      <div className="signin-right">
        <div className="form-container">
          <h2>Sign In</h2>
          <p>
            New user? <a href="/">Create an account</a>
          </p>

          <form onSubmit={handleSubmit}>
            <label>Email Address</label>
            <input type="email" name="email" placeholder="Enter your email" />
           

            <label>Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
              />
              <span
                className={` ${showPassword ? "close" : ""}`}
                onClick={togglePasswordVisibility}
                aria-label="Toggle password visibility"
              >
                
              </span>
            </div>
            {emailError && <div className="error-message">{emailError}</div>}
            {passwordError && <div className="error-message">{passwordError}</div>}
            <div className="forgot-password">
              <a href="/forgot-password">Forgot password?</a>
            </div>

            <button type="submit" className="signin-button">
              Sign In
            </button>
          </form>

          <div className="divider">or</div>
          <div className="sign-options">
            <div>
              <button className="social-button google btn-flex">
                <div className="svg-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="20px"
                    height="20px"
                  >
                    <path
                      fill="#fbc02d"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#e53935"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4caf50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1565c0"
                      d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                </div>
                <div>Sign in with Google</div>
              </button>
            </div>
            <div className="btn-flex">
              <button className="social-button facebook btn-flex">
                <div className="svg-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="23px"
                    height="23px"
                  >
                    <path
                      fill="#039be5"
                      d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                    />
                    <path
                      fill="#fff"
                      d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                    />
                  </svg>
                </div>
                <div>Sign in with Facebook</div>
              </button>
            </div>
          </div>

          <p className="privacy-policy">
            Protected by reCAPTCHA and subject to the Google{" "}
            <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
            <a href="https://policies.google.com/terms">Terms of Service</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Log; 
