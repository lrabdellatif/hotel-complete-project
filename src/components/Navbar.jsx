import React, { useState, useEffect } from "react";
import logo from "../images/Download_premium_image_of_Budget_hotel__logo__editable_business_branding_template_design_by_Tung_about_bed__sleep__badge__bedroom__and_black_13639313__1_-removebg-preview.png";
import loginIcon from "../images/enter.png";
import logoutIcon from "../images/logout.png";

export default function Navbar() {
  const token = localStorage.getItem("token");
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);
  const [userName, setUserName] = useState(""); // إضافة state لاسم المستخدم

  // Search suggestions data (English only)
  const suggestionsData = [
    "luxury room",
    "presidential suite", 
    "family room",
    "sea view",
    "mountain view",
    "swimming pool",
    "spa massage",
    "restaurant",
    "conference hall",
    "24/7 service",
    "room service",
    "breakfast included",
    "free wifi",
    "parking available",
    "gym access"
  ];

  useEffect(() => {
    if (token) {
      const email = localStorage.getItem("userEmail");
      if (email) {
        const name = email.split('@')[0];
        const formattedName = name.charAt(0).toUpperCase() + name.slice(1);
        setUserName(formattedName);
        setTimeout(() => {
        setShowGreeting(true);
      }, 300);
      }
    }
  }, [token]);

  // Search for suggestions
  useEffect(() => {
    if (searchQuery.length > 1) {
      const filtered = suggestionsData.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSearchSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`🔍 Searching for: ${searchQuery}`);
      setSearchQuery('');
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail"); // إزالة البريد أيضاً عند تسجيل الخروج
    window.location.href = "/login";
  };

  const clearNotifications = () => {
    setNotifications(0);
    setShowNotifications(false);
  };

  return (
    <div className="navbar">
      {/* Logo */}
      <div className="nav-logo">
        <img src={logo} alt="Hotel Logo" />
      </div>

      {/* تحية المستخدم */}
      {token && userName && (
        <div className="user-greeting">
          <span className="welcome-text">Hello</span>
          <span className="user-name">{userName} </span>
          <span className="welcome-text"> to your account</span>

        </div>
      )}

      {/* Links */}
      <div className="nav-links">
        <div className="dropdown">
          <a href="#" className="nav-link">Our Offers ▾</a>
          <div className="dropdown-content">
            <a href="#">Rooms & Suites 🛏️</a>
            <a href="#">Special Deals 💎</a>
            <a href="#">Long Stays ⏳</a>
            <a href="#">Wellness & Spa 🧖</a>
          </div>
        </div>

        <div className="dropdown">
          <a href="#" className="nav-link">Reserve Now ▾</a>
          <div className="dropdown-content">
            <a href="#">Book a Room 📅</a>
            <a href="#">Events & Halls 🎉</a>
            <a href="#">Restaurant 🍽️</a>
            <a href="#">Private Dining 🍷</a>
          </div>
        </div>

        <div className="dropdown">
          <a href="#" className="nav-link">Contact Us ▾</a>
          <div className="dropdown-content">
            <a href="#">Call 📞</a>
            <a href="#">Email 📧</a>
            <a href="#">Location 📍</a>
          </div>
        </div>
      </div>

      {/* Search with Suggestions */}
      <form className="nav-search" onSubmit={handleSearchSubmit}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for rooms, services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => searchQuery.length > 1 && setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          />
          <button type="submit">🔍</button>
          
          {showSuggestions && searchSuggestions.length > 0 && (
            <div className="search-suggestions">
              {searchSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
      </form>

      {/* Notifications */}
      <div className="nav-notification">
        <div 
          className="notification-icon"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <i className="fa-solid fa-bell"></i>
          {notifications > 0 && (
            <span className="notification-badge">{notifications}</span>
          )}
        </div>

        {showNotifications && (
          <div className="notification-dropdown">
            <div className="notification-header">
              <h4>Notifications</h4>
              <button onClick={clearNotifications}>Clear All</button>
            </div>
            <div className="notification-list">
              <div className="notification-item">
                <div className="notification-emoji">🎉</div>
                <div className="notification-content">
                  <p>20% discount on bookings this week</p>
                  <span>5 minutes ago</span>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-emoji">🛎️</div>
                <div className="notification-content">
                  <p>Room service available 24/7</p>
                  <span>1 hour ago</span>
                </div>
              </div>
              <div className="notification-item">
                <div className="notification-emoji">🏊</div>
                <div className="notification-content">
                  <p>Swimming pool is now open for everyone</p>
                  <span>3 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="nav-btn">
        <a href="#" className="book-btn">✨ Book Now</a>
        
        {token ? (
          <a href="#" className="auth-link logout-btn" onClick={handleLogout}>
            <img src={logoutIcon} alt="Logout" /> Logout
          </a>
        ) : (
          <a href="/login" className="auth-link login-btn">
            <img src={loginIcon} alt="Login" /> Login
          </a>
        )}
      </div>
    </div>
  );
}