// ** Components Imports
import StatusMark from "./StatusMark";
// ** Model Imports
import { WebCardData, WebCardProps } from "../models/interface";
// ** React Imports
import React, { useEffect, useState } from "react";
// ** Third Party Imports
import { getWebCards } from "../services/Http_Services/httpClient";

function WebCard({ onClick }: WebCardProps) {
  const [webCards, setWebCards] = useState<WebCardData[]>([]);

  useEffect(() => {
    (async () => {
      const webCardDB = await getWebCards();
      setWebCards(webCardDB);
    })();
  }, []);

  // Render the card information by ID
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
        </tr>
      ))}
    </>
  );
}

export default WebCard;
