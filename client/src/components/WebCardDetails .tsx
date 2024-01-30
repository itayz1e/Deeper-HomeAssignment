// ** style Imports
import "../style/FormPopup.scss";
// ** Model Imports
import { WebCardDetailsProps } from "../models/interface";
// ** React Imports
import React, { useState } from "react";
// ** Third Party Imports
import {
  handleDeleteCardWrapper,
  handleNameChange,
  handleStatusChange,
  handleUpdateCardLocal,
} from "../services/helpers/webCardDetailsHelpers";

const WebCardDetails: React.FC<WebCardDetailsProps> = ({
  _id,
  webName,
  webStatus,
  onClose,
}) => {
  const [updatedWebName, setUpdatedWebName] = useState<string>(webName);
  const [updatedWebStatus, setUpdatedWebStatus] = useState<string>(webStatus);

  return (
    <div className="row">
      <div className="col-md-12">
        <form
          onSubmit={(e) =>
            handleUpdateCardLocal(
              e,
              _id,
              updatedWebName,
              updatedWebStatus,
              onClose
            )
          }
        >
          <h1>Update Web Card</h1>
          <fieldset>
            <label htmlFor="webName">Web Name:</label>
            <input
              id="webName"
              className="webName"
              value={updatedWebName}
              onChange={(e) => handleNameChange(e, setUpdatedWebName)}
            />
            <label htmlFor="webStatus">Web Status:</label>
            <select
              id="webStatus"
              name="form_web"
              value={updatedWebStatus}
              onChange={(e) => handleStatusChange(e, setUpdatedWebStatus)}
              required
            >
              <option value="">Select Status</option>
              <option className="greenText" value="green">
                green - Latency below 20 ms.
              </option>
              <option className="orangeText" value="orange">
                orange - Latency between 20 ms and 50 ms.
              </option>
              <option className="redText" value="red">
                red - Latency over 50 ms
              </option>
            </select>
          </fieldset>
          <button className="UpdateBtn" type="submit">
            Update
          </button>
        </form>
        <button
          className="delete"
          onClick={(e) => handleDeleteCardWrapper(e, webName, _id, onClose)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default WebCardDetails;
