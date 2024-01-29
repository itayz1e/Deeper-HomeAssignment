 export interface NewWebCardProps {
    onClose: () => void;
    onCreateCard: (newCard: { webName: string; webStatus: string; _id:string }) => void;
  }

  export interface WebCardProps {
    onClick: (webCard: WebCardData, event: React.MouseEvent<HTMLTableRowElement>) => void;
  }
  
  export interface WebCardDetailsProps {
    _id: string;
    webName: string;
    webStatus: string;
    onClose: () => void;
  }
  export interface WebCardData {
    _id: string;
    webName: string;
    webStatus: string;
  }
  export interface UpdatedWebCardData {
    webName: string;
    webStatus: string;
  }

  export interface StatusMarkProps {
    status: string;
  }