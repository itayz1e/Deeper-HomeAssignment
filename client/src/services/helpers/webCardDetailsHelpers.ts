import { handleDeleteCard, handleUpdateCard } from "../Http_Services/httpClient";

// Management of updating card details
export const handleUpdateCardLocal = async (
  e: React.FormEvent,
  _id: string,
  updatedWebName: string,
  updatedWebStatus: string,
  onClose: () => void
) => {
  e.preventDefault();
  handleUpdateCard(_id, updatedWebName, updatedWebStatus, onClose);
};

// Managing a call to delete a card
export const handleDeleteCardWrapper = async (
  e: React.FormEvent,
  webName: string,
  _id: string,
  onClose: () => void
) => {
  e.preventDefault();
  await handleDeleteCard(webName, _id, onClose);
};

// Name value change management
export const handleNameChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setUpdatedWebName: React.Dispatch<React.SetStateAction<string>>
) => {
  e.preventDefault();
  setUpdatedWebName(e.target.value);
};

// Managing the status value change
export const handleStatusChange = (
  e: React.ChangeEvent<HTMLSelectElement>,
  setUpdatedWebStatus: React.Dispatch<React.SetStateAction<string>>
) => {
  e.preventDefault();
  setUpdatedWebStatus(e.target.value);
};
