// ** Components Imports
import StatusMark from "./StatusMark";
// ** Model Imports
import { WebCardData, WebCardProps } from "../models/interface";
// ** React Imports
import React from "react";
import { useQuery } from "react-query";
// ** Third Party Imports
import { getWebCards } from "../services/Http_Services/httpClient";



function WebCard({ onClick }: WebCardProps) {
  const { data, status } = useQuery("webCard", getWebCards);
  const webCards: WebCardData[] = data || [];
  // Render success state
  const handleCardClick: React.MouseEventHandler<HTMLTableRowElement> = (
    event
  ) => {
    const webCardId = event.currentTarget.dataset.webCardId;
    const clickedWebCard = webCards.find(
      (webCard) => webCard._id === webCardId
    );
    if (clickedWebCard) {
      onClick(clickedWebCard, event);
    }
  };

  return (
    <>
      {status === "error" && <div>err</div>}
      {status === "loading" && <div>Loading...</div>}
      {webCards.map((webCard, _id) => (
        <tr
          key={_id}
          onClick={handleCardClick}
          style={{ cursor: "pointer" }}
          data-web-card-id={webCard._id}
        >
          <td className="text-left">{webCard.webName}</td>
          <td className="text-left">
            <StatusMark status={webCard.webStatus} />
          </td>
          <td className="text-left">
            {/* {<div>Latency Time:{webCard.latencyTime}</div> && <div>Latency Time:0.20ms</div>} */}
            <div>Latency Time: {webCard.latencyTime}ms</div>
          </td>
        </tr>
      ))}
    </>
  );
}

export default WebCard;
