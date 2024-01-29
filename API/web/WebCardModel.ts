import mongoose, { Schema } from "mongoose";

interface WebCard {
  webName: string;
  webStatus: string;
}

export const WebCardSchema = new Schema<WebCard>({
  webName: {
    type: String,
    require: true,
  },
  webStatus: {
    type: String,
    require: true,
  },
});

const WebCardModel = mongoose.model("WebCards", WebCardSchema);

export default WebCardModel;
