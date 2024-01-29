 export interface NewWebCardProps {
    onClose: () => void;
    onCreateCard: (newCard: { webName: string; webStatus: string; _id:string }) => void;
  }

  export interface WebCardProps {
    onClick: (webCard: WebCardData, event: React.MouseEvent<HTMLTableRowElement>) => void;
  }
  
  export interface WebCardDetailsProps {
    webName: string;
    webStatus: string;
    onUpdateCard: (updateCard: UpdatedWebCardData) => void;
    onClose: () => void;
  }
  export interface WebCardData {
    _id: string | undefined;
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