// webCard Http Api calls 

// ** Third Party Imports
import axios from 'axios';

export const getWebCards = async () => {
  try {
    const { data } = await axios.get(`/api/web/get-web-cards`);
    return data.webCardDB;
  } catch (error) {
    console.error('Error fetching web cards:', error);
    return [];
  }
};


export const handleCreateCard = async (
  e: React.FormEvent,
  onCreateCard: (newCard: { webName: string; webStatus: string; _id: string }) => void,
  onClose: () => void
) => {
  e.preventDefault();
  const form = e.currentTarget as HTMLFormElement;
  const name = form.webName.value;
  const select = form.form_web.value;

  try {
    // Send the data to the server
    const { data } = await axios.post("/api/web/add-web-card", {
      webName: name,
      webStatus: select,
    });

    const { ok } = data;
    if (ok) {
      // Call the passed-in onCreateCard function if needed
      onCreateCard({ webName: name, webStatus: select, _id: data._id });

      // Close the form
      onClose();
    }
  } catch (error) {
    console.error("Error creating web card:", error);
  }
};
