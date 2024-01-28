// ** style Imports
import "../style/StatusMark.scss";
// ** React Imports
import React from 'react';

interface StatusMarkProps {
  status: string;
}

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
