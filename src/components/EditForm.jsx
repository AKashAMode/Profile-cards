
import { useState } from "react";
import "./EditForm.css";

const EditForm = ({editedData, onSave, onReset }) => {
  const [name, setName] = useState(editedData.name);
  const [designation, setDesignation] = useState(editedData.designation);
  const [company, setCompany] = useState(editedData.company);

  const handleSave = () => {
    onSave({ name, designation, company });
  };

  return (
    <div className="edit-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-input"
        placeholder="Name"
      />
      <input
        type="text"
        value={designation}
        onChange={(e) => setDesignation(e.target.value)}
        className="form-input"
        placeholder="Designation"
      />
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="form-input"
        placeholder="Company"
      />
      <button onClick={handleSave} className="save-button">
        Save
      </button>
      <button onClick={onReset} className="reset-button">
        Reset
      </button>
    </div>
  );
};

export default EditForm;
