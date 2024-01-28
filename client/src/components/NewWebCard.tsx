// ** style Imports
import "../style/FormPopup.scss";
// ** Model Imports
import { NewWebCardProps } from "../models/interface";
// ** React Imports
import React from "react";


const NewWebCard: React.FC<NewWebCardProps> = ({ onClose, onCreateCard }) => {
  function handleCreateCard(e: React.FormEvent) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const name = form.webName.value;
    const select = form.form_web.value;
    onCreateCard({ webName: name, webStatus: select });
    onClose();
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <form onSubmit={handleCreateCard}>
          <h1>New Web</h1>

          <fieldset>
            <label>Web Name:</label>
            <input type="text" name="webName" required />
            <label htmlFor="web">Web Status:</label>
            <select name="form_web" required>
              <option value="">Select status</option>
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

          <button className="UpdateBtn" type="submit">create</button>
        </form>
      </div>
    </div>
  );
};

export default NewWebCard;
