import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="user-profile-container">
      <h2>User Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Joined On:</strong> {user.joinedDate}</p>
        <p><strong>Status:</strong> {user.status}</p>
      </div>
    </div>
  );
};

export default UserProfile;
