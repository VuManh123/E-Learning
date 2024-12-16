import React from 'react';

const AdminProfile = ({ admin }) => {
  return (
    <div className="admin-profile-container">
      <h2>Admin Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {admin.name}</p>
        <p><strong>Email:</strong> {admin.email}</p>
        <p><strong>Role:</strong> {admin.role}</p>
        <p><strong>Joined On:</strong> {admin.joinedDate}</p>
      </div>
      <div className="button-container">
        <button>Edit Profile</button>
      </div>
    </div>
  );
};

export default AdminProfile;
