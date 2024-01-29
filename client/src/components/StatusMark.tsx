// ** style Imports
import "../style/StatusMark.scss";
// ** Model Imports
import { StatusMarkProps } from "../models/interface";
// ** React Imports
import React from 'react';


const StatusMark: React.FC<StatusMarkProps> = ({ status }) => {
  const getStatusClassName = () => {
    switch (status) {
      case 'red':
        return 'fab red';
      case 'orange':
        return 'fab orange';
      case 'green':
        return 'fab green';
      default:
        return 'fab';
    }
  };

  return (
    <section>
      <div className={getStatusClassName()}></div>
    </section>
  );
};

export default StatusMark;
