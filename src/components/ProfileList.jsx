import React from "react";
import "./ProfileList.css"; 

const ProfileList = ({ users, onSelectUser }) => {
  return (
    <div className="profile-list">
      {users.map((user, index) => (
        <div
          key={index}
          className="profile-item"
          onClick={() => onSelectUser(user)}
        >
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            className="profile-image"
          />
          <h2 className="profile-name">
            {user.name.first} {user.name.last}
          </h2>
          <p className="profile-email">{user.email}</p>
          <p className="profile-location">
            {user.location.city}, {user.location.country}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
