
import {useState } from "react";

const ProfileCard = ({ user, onSave, onReset }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(`${user.name.first} ${user.name.last}`);
  const [designation, setDesignation] = useState("");
  const [company, setCompany] = useState("");

  const handleSave = () => {
    onSave({ name, designation, company });
    setIsEditing(false);
  };

  const handleReset = () => {
    setName(`${user.name.first} ${user.name.last}`);
    setDesignation("");
    setCompany("");
    onReset();
  };


  const convertToBase64 = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => resolve(reader.result);
    });
  };

  return (
    <div className="profile-card">
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        className="profile-image"
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="edit-input"
            placeholder="Name"
          />
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="edit-input"
            placeholder="Designation"
          />
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="edit-input"
            placeholder="Company"
          />
          <button onClick={handleSave} className="save-button">
            Save
          </button>
          <button onClick={handleReset} className="reset-button">
            Reset
          </button>
        </>
      ) : (
        <>
          <h2 className="profile-name">{name}</h2>
          <p className="profile-designation">{designation}</p>
          <p className="profile-company">{company}</p>
          <button onClick={() => setIsEditing(true)} className="edit-button">
            Edit Profile
          </button>
        </>
      )}
      <p className="profile-email">{user.email}</p>
      <p className="profile-location">
        {user.location.city}, {user.location.country}
      </p>
    </div>
  );
};

export default ProfileCard;
