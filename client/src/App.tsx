// ** style Imports
import "./App.scss";
// ** Components Imports
import WebCard from "./components/WebCard";
import NewWebCard from "./components/NewWebCard";
import WebCardDetails from "./components/WebCardDetails ";
// ** Model Imports
import { UpdatedWebCardData, WebCardData } from "./models/interface";
// ** React Imports
import React, { useState } from "react";
import { getWebCards } from "./services/Http_Services/httpClient";
import { useQuery } from "react-query";

const App: React.FC = () => {
  const [isNewWebCardVisible, setIsNewWebCardVisible] = useState(false);
  const [selectedWebCard, setSelectedWebCard] = useState<WebCardData | null>(
    null
  );
  const { refetch } = useQuery("webCard", getWebCards);

  // Pops-up a creation window
  const handleAddWebCard = () => {
    setIsNewWebCardVisible(!isNewWebCardVisible);
    refetch();
  };

  const handleCreateCard = () => {
    refetch();
  };

  const handleCardClick = (webCardData: WebCardData) => {
    setSelectedWebCard(webCardData);
    refetch();
  };
  return (
    <div>
      <div className="table-title">
        <h3>Monitoring websites</h3>
        <button onClick={handleAddWebCard} className="add-button">
          New Web
        </button>
      </div>
      <table className="table-fill">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Status</th>
            <th className="text-left">Latency Time</th>
          </tr>
        </thead>
        <tbody className="table-hover">
          <WebCard onClick={handleCardClick} />
        </tbody>
      </table>
      {selectedWebCard && (
        <div className="modal-overlay">
          <div className="modal">
            <span
              className="close-btn"
              onClick={() => setSelectedWebCard(null)}
            >
              X
            </span>
            <WebCardDetails
              webName={selectedWebCard.webName}
              webStatus={selectedWebCard.webStatus}
              onClose={() => setSelectedWebCard(null)}
              _id={selectedWebCard._id}
            />
          </div>
        </div>
      )}
      {isNewWebCardVisible && (
        <div className="modal-overlay">
          <div className="modal">
            <span
              className="close-btn"
              onClick={() => setIsNewWebCardVisible(false)}
            >
              X
            </span>
            <NewWebCard
              onClose={() => setIsNewWebCardVisible(false)}
              onCreateCard={handleCreateCard}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
