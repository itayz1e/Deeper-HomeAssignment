// ** Third Party Imports
import axios from "axios";

// webCard Http Api calls
export const getWebCards = async () => {
  try {
    const { data } = await axios.get(`/api/web/get-web-cards`);
    return data.webCardDB;
  } catch (error) {
    console.error("Error fetching web cards:", error);
    return [];
  }
};

// A call to the server to create a card
export const handleCreateCard = async (
  e: React.FormEvent,
  onCreateCard: (newCard: {
    webName: string;
    webStatus: string;
    _id: string;
  }) => void,
  onClose: () => void
) => {
  e.preventDefault();
  const form = e.currentTarget as HTMLFormElement;
  const name = form.webName.value;
  const select = form.form_web.value;
  try {
    const { data } = await axios.post("/api/web/add-web-card", {
      webName: name,
      webStatus: select,
    });
    const { ok } = data;
    if (ok) {
      onCreateCard({ webName: name, webStatus: select, _id: data._id });
      onClose();
    }
  } catch (error) {
    console.error("Error creating web card:", error);
  }
};

// Calling the server to update a card
export const handleUpdateCard = async (
  _id: string,
  updatedWebName: string,
  updatedWebStatus: string,
  onClose: () => void
) => {
  try {
    const { data } = await axios.put(`/api/web/update-web-card?_id=${_id}`, {
      webName: updatedWebName,
      webStatus: updatedWebStatus,
    });
    onClose();
  } catch (error) {
    console.error("Error updating web card:", error);
  }
};

// A call to the server to delete a card
export const handleDeleteCard = async (
  webName: string,
  _id: string,
  onClose: () => void
) => {
  try {
    if (confirm(`Are you sure you want to delete the card: ${webName}`)) {
      const data = await axios.delete(`/api/web/delete-web-card?_id=${_id}`);
      onClose();
    }
  } catch (error) {
    console.error("Error deleting web card:", error);
  }
};
