// CustomerPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/customerpage.css'; // Import the CSS file

function CustomerPage() {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="navbar-left">
          <span className="rbi-logo">Priya Kamaraj Bank</span>
          {/* <Link to="/create-account">
          <button style={{ backgroundColor: '#799e9c', marginBottom: '20px'}}>Create an Account</button>
        </Link>
        
        <Link to="/login">
        <button style={{ backgroundColor: '#799e9c' }}>Already Have an Account</button>
        </Link> */}
        </div>
        <div className="navbar-right">
          <span>You're secure with us!</span>
        </div>
      </nav>
      <div className="button-container">
        <Link to="/create-account">
          <button style={{ backgroundColor: '#799e9c' }}>Create an Account</button>
        </Link>
        
        <Link to="/login">
        <button style={{ backgroundColor: '#799e9c' }}>Already Have an Account</button>
        </Link>
      </div>
      <div className="bank-info">
        <h2 style={{color:'white'}}>About Our Bank</h2>
        <p style={{fontSize: '18px'}}>Welcome to Priya Kamaraj Bank, where your financial journey begins.Experience personalized banking solutions tailored to your needs.Trust and security are our top priorities, ensuring your peace of mind.</p>
      </div>
      <footer className="footer">
        <h3>Contact Details</h3>
        <p>If you have any questions or need assistance, feel free to contact us:</p>
        <ul>
          <li>Email: priyakamaraj@gmail.com</li>
          <li>Phone: 123-456-7890</li>
          <li>Address: 123 Bank Street, Chennai, India</li>
        </ul>
      </footer>
    </div>
  );
}

export default CustomerPage;
