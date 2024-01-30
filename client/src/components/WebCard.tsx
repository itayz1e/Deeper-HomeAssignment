// ** Components Imports
import StatusMark from "./StatusMark";
// ** Model Imports
import { WebCardProps } from "../models/interface";
// ** React Imports
import React from "react";
// ** Third Party Imports
import { useGetWebCards } from "../hooks/useGetWebCards.ts";

function WebCard({ onClick }: WebCardProps) {
  const { data, status, error } = useGetWebCards();
  // Render success state
  const handleCardClick: React.MouseEventHandler<HTMLTableRowElement> = (
    event
  ) => {
    const webCardId = event.currentTarget.dataset.webCardId;
    const clickedWebCard = data?.find((webCard) => webCard._id === webCardId);
    if (clickedWebCard) {
      onClick(clickedWebCard, event);
    }
  };

  return (
    <>
      {status === "error" && <div>{error?.toString() ?? "Error"}</div>}
      {status === "loading" && <div>Loading...</div>}
      {data?.map((webCard, _id) => (
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
            <div>Latency Time: {webCard.latencyTime}ms</div>
          </td>
        </tr>
      ))}
    </>
  );
}

export default WebCard;
