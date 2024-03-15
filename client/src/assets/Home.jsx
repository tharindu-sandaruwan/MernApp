import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem('userDetails');
    localStorage.removeItem('isLoggedIn');
    alert('Successfully Logout');
    navigate('/');
  };

  return (
    <div>
      <h2>User Details</h2>
      {isLoggedIn && userDetails ? (
        <div>
          <p>Email: {userDetails.email}</p>
          <p>First Name: {userDetails.fname}</p>
          <p>Last Name: {userDetails.lname}</p>
          <p>Phone number: {userDetails.phone}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <p>No user logged in. Please log in.</p>
      )}
    </div>
  );
}
