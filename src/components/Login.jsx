import React, { useState, useEffect } from "react";
import axios from "axios";
import loginIllustration from "../images/328f58a2-3605-49c2-849c-bc9efa04f08e.jpeg";
import messageArrow from "../images/message.gif";

// CSS مباشرة في الملف
const loginStyles = `
  .login-container {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f6fa;
    font-family: Arial, sans-serif;
  }

  .login-main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 1050px;
    max-width: 95%;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    overflow: hidden;
  }

  .login-illustration {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    background: white;
  }

  .login-illustration img:first-child {
    width: 100%;
    max-width: 450px;
    object-fit: contain;
    border-radius: 0;
  }

  .login-illustration .arrow {
    position: absolute;
    bottom: 40px;
    right: -60px;
    width: 150px;
    pointer-events: none;
  }

  .login-form-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background: white;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;
    max-width: 400px;
  }

  .login-title {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
    background: linear-gradient(90deg, #2d79f3, #6c63ff, #00c6ff);
    background-size: 200% auto;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    animation: gradientMove 4s ease infinite;
  }

  @keyframes gradientMove {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  .login-subtitle {
    text-align: center;
    font-size: 14px;
    color: #666;
    margin-top: -8px;
    margin-bottom: 20px;
    font-style: italic;
  }

  .login-input-group {
    display: flex;
    flex-direction: column;
  }

  .login-input-group > label {
    color: #151717;
    font-weight: 600;
    margin-bottom: 5px;
  }

  .login-input-container {
    border: 2px solid #dcdcdc;
    border-radius: 12px;
    height: 55px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    gap: 10px;
    transition: 0.2s ease-in-out;
  }

  .login-input-container i {
    color: #555;
    font-size: 18px;
  }

  .login-input {
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 15px;
  }

  .login-input-container:focus-within {
    border: 2px solid #2d79f3;
  }

  .login-remember {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .login-link {
    font-size: 14px;
    color: #2d79f3;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
  }

  .login-button {
    margin: 20px 0 10px 0;
    background-color: #151717;
    border: none;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border-radius: 12px;
    height: 55px;
    width: 100%;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .login-button:hover {
    background-color: #252727;
  }

  .login-button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .login-text {
    text-align: center;
    color: black;
    font-size: 14px;
    margin: 5px 0;
  }

  .login-social-buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .login-social-btn {
    margin-top: 10px;
    width: 48%;
    height: 45px;
    border-radius: 12px;
    border: 1px solid #ededef;
    background-color: white;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .login-social-btn:hover {
    border: 1.5px solid #2d79f3;
  }

  .login-error {
    color: #e74c3c;
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
  }

  .login-success {
    color: #27ae60;
    text-align: center;
    font-size: 14px;
    margin-top: 10px;
  }

  .loading-spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 3px solid rgba(255,255,255,.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .register-btn {
    background-color: #6c63ff !important;
    margin: 10px 0 !important;
  }

  .register-btn:hover {
    background-color: #5a52d4 !important;
  }

  @media (max-width: 900px) {
    .login-main {
      grid-template-columns: 1fr;
    }
    
    .login-illustration {
      display: none;
    }
    
    .login-form-section {
      padding: 30px;
    }
  }
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const originalTitle = document.title;
    const originalFavicon = document.querySelector("link[rel*='icon']")?.href;

    document.title = "Login Page - Aurora Palace";
    
    let favicon = document.querySelector("link[rel*='icon']");
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.href = './log-in.png';
    
    const styleElement = document.createElement('style');
    styleElement.textContent = loginStyles;
    document.head.appendChild(styleElement);
    
    return () => {
      document.title = originalTitle;
      
      if (originalFavicon && favicon) {
        favicon.href = originalFavicon;
      }
      
      document.head.removeChild(styleElement);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { 
        email, 
        password 
      });
      
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userEmail", res.data.email);
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true");
      }
      
      setSuccess("✅ Logged in successfully");
      
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
      
    } catch (err) {
      const errorMessage = err.response?.data?.error || "Login failed. Please try again.";
      setError(`❌ ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  const goToRegister = () => {
    window.location.href = "/register";
  };

  return (
    <div className="login-container">
      <div className="login-main">
        {/* Illustration Left */}
        <div className="login-illustration">
          <img src={loginIllustration} alt="Login illustration" style={{border: 'none', boxShadow: 'none'}} />
          <img className="arrow" src={messageArrow} alt="Arrow pointing" style={{border: 'none'}} />
        </div>

        {/* Login Right */}
        <div className="login-form-section">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="login-title">✨ Unlock Your Next Escape 🔑</h2>
            <p className="login-subtitle">Login to your account</p>

            <div className="login-input-group">
              <label>Email</label>
              <div className="login-input-container">
                <i className="fa-solid fa-envelope"></i>
                <input
                  type="email"
                  className="login-input"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="login-input-group">
              <label>Password</label>
              <div className="login-input-container">
                <i className="fa-solid fa-lock"></i>
                <input
                  type="password"
                  className="login-input"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="login-remember">
              <div>
                <input 
                  type="checkbox" 
                  id="remember" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  disabled={isLoading}
                />
                <label htmlFor="remember"> Remember me</label>
              </div>
              <a href="#" className="login-link">Forgot password?</a>
            </div>

            <button 
              type="submit" 
              className="login-button"
              disabled={isLoading}
            >
              {isLoading ? <span className="loading-spinner"></span> : "Sign In"}
            </button>
            
            {/* زر التسجيل الكبير */}
            <button 
              type="button" 
              className="login-button register-btn"
              onClick={goToRegister}
              disabled={isLoading}
            >
              📝 Create New Account
            </button>
            
            {error && <div className="login-error">{error}</div>}
            {success && <div className="login-success">{success}</div>}
            
            <p className="login-text">
              Don't have an account? <a href="/register" className="login-link" onClick={goToRegister}>Sign Up</a>
            </p>
            
            <div style={{position: 'relative', textAlign: 'center', margin: '20px 0'}}>
              <span style={{background: '#fff', padding: '0 10px', position: 'relative', zIndex: 1, color: '#666'}}>Or With</span>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                height: '1px',
                background: '#ddd',
                zIndex: 0
              }}></div>
            </div>

            <div className="login-social-buttons">
              <button type="button" className="login-social-btn" onClick={goToRegister} disabled={isLoading}>
                <i className="fa-solid fa-user-plus"></i> Sign Up
              </button>
              <button type="button" className="login-social-btn" disabled={isLoading}>
                <i className="fa-brands fa-google"></i> Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}