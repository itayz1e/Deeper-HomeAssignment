// ** style Imports
import "./App.scss";
// ** Components Imports
import WebCard from "./components/WebCard";
import NewWebCard from "./components/NewWebCard";
import WebCardDetails from "./components/WebCardDetails ";
// ** Model Imports
import { WebCardData } from "./models/interface";
// ** React Imports
import React, { useState } from "react";
import { useQueryClient } from "react-query";
// ** Third Party Imports
import { QueryKeys } from "./utils/queryKeys.ts";

const App: React.FC = () => {
  const [isNewWebCardVisible, setIsNewWebCardVisible] = useState(false);
  const [selectedWebCard, setSelectedWebCard] = useState<WebCardData | null>(
    null
  );
  const queryClient = useQueryClient();

  const handleRefetchWebCards = async () => {
    await queryClient.refetchQueries([QueryKeys.WebCards]);
  };
  // Pops-up a creation window
  const handleAddWebCard = async () => {
    setIsNewWebCardVisible(!isNewWebCardVisible);
    await handleRefetchWebCards();
  };

  const handleCreateCard = async () => {
    await handleRefetchWebCards();
  };

  const handleCardClick = async (webCardData: WebCardData) => {
    setSelectedWebCard(webCardData);
    await handleRefetchWebCards();
  };

  const handleCloseWebCard = async () => {
    setSelectedWebCard(null);
    await handleRefetchWebCards();
  };

  return (
    <div>
      <div className="table-title">
        <h3>Monitoring websites</h3>
        <button onClick={handleAddWebCard} className="add-button">
        <i className="fas fa-plus"></i> New Web
        </button>
        <button id="refreshButton" onClick={handleRefetchWebCards} className="get-button">
          <i className="fas fa-sync-alt"></i> Refresh
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
              onClose={handleCloseWebCard}
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
