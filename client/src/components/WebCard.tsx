// ** Components Imports
import StatusMark from './StatusMark';
// ** Model Imports
import { WebCardProps } from '../models/interface';
// ** React Imports
import React from 'react';


function WebCard({ onClick }: WebCardProps) {
  const webCardData = {
    webName: 'google',
    webStatus: 'green',
  };

  const handleCardClick = (event: React.MouseEvent) => {
    onClick(webCardData, event);
  };

  return (
    <tr onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <td className="text-left">{webCardData.webName}</td>
      <td className="text-left">
        <StatusMark status={webCardData.webStatus} />
      </td>
    </tr>
  );
}

export default WebCard;
