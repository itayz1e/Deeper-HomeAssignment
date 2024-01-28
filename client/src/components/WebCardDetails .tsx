// ** style Imports
import "../style/FormPopup.scss";
// ** Model Imports
import { WebCardDetailsProps } from "../models/interface";
// ** React Imports
import React, { useState } from "react";

const WebCardDetails: React.FC<WebCardDetailsProps> = ({
  webName,
  webStatus,
  onUpdateCard,
  onClose,
}) => {
  const [updatedWebName, setUpdatedWebName] = useState<string>(webName);
  const [updatedWebStatus, setUpdatedWebStatus] = useState<string>(webStatus);

  const handleUpdateCard = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Web Name:", updatedWebName);
    console.log("Updated Web Status:", updatedWebStatus);
    //call to DB to CRUD
    onUpdateCard({ webName: updatedWebName, webStatus: updatedWebStatus });

    onClose();
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedWebName(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setUpdatedWebStatus(e.target.value);
  };

  return (
    <div className="row">
      <div className="col-md-12">
        <form onSubmit={handleUpdateCard}>
          <h1>Update Web</h1>

          <fieldset>
            <label htmlFor="webName">Web Name:</label>
            <input
              id="webName"
              className="webName"
              value={updatedWebName}
              onChange={handleNameChange}
            />
            <label htmlFor="webStatus">Web Status:</label>
            <select
              id="webStatus"
              name="form_web"
              value={updatedWebStatus}
              onChange={handleStatusChange}
              required
            >
              <option value="">Select Status</option>
              <option value="green">green - Latency below 20 ms.</option>
              <option value="orange">
                orange - Latency between 20 ms and 50 ms.
              </option>
              <option value="red">red - Latency over 50 ms</option>
            </select>
          </fieldset>

          <button className="UpdateBtn" type="submit">
            Update
          </button>
          <button className="delete">Delete</button>
        </form>
      </div>
    </div>
  );
};

export default WebCardDetails;
