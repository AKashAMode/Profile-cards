
import { useState } from "react";
import useFetchUsers from "./hooks/useFetchUsers";
import ProfileList from "./components/ProfileList";
import ProfileCard from "./components/ProfileCard";
import downloadCard from "./utils/downloadCard";
import "./App.css";

const App = () => {
  const { users, loading } = useFetchUsers();
  const [selectedUser, setSelectedUser] = useState(null);
  const [editedData, setEditedData] = useState({
    name: "",
    designation: "",
    company: "",
  });

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setEditedData({
      name: `${user.name.first} ${user.name.last}`,
      designation: "",
      company: "",
    });
  };

  const handleSave = (data) => {
    setEditedData(data);
  };

  const handleDownload = () => {
    downloadCard("profile-card", "profile-card.png");
  };

  return (
    <div className="app-container">
      <h1 className="title">Corporate Profile Card Generator</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ProfileList users={users} onSelectUser={handleSelectUser} />
          {selectedUser && (
            <div className="profile-section">
              <div id="profile-card">
                <ProfileCard
                  user={selectedUser}
                  onSave={handleSave}
                  editedData={editedData}
                />
              </div>
              <button onClick={handleDownload} className="download-button">
                Download Card
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;