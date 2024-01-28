 export interface NewWebCardProps {
    onClose: () => void;
    onCreateCard: (newCard: { webName: string; webStatus: string }) => void;
  }

  export interface WebCardProps {
    onClick: (webCardData: { webName: string; webStatus: string }, event: React.MouseEvent) => void;
  }
  
  export interface WebCardDetailsProps {
    webName: string;
    webStatus: string;
    onUpdateCard: (updateCard: UpdatedWebCardData) => void;
    onClose: () => void;
  }
  export interface WebCardData {
    webName: string;
    webStatus: string;
  }
  export interface UpdatedWebCardData {
    webName: string;
    webStatus: string;
  }