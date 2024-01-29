import mongoose, { Schema } from "mongoose";

interface WebCard {
  webName: string;
  webStatus: string;
  latencyTime: number;
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
  latencyTime: {
    type: Number,
    require: false,
  },
});

const WebCardModel = mongoose.model("WebCards", WebCardSchema);

export default WebCardModel;
