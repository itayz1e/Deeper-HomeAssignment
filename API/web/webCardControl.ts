import * as dotenv from "dotenv";
import WebCardModel from "./WebCardModel";
dotenv.config();

// Create a card
export async function addWebCard(req: any, res: any) {
  try {
    const { webName, webStatus } = req.body;
    const webCardDB = await WebCardModel.create({ webName, webStatus });

    res.send({ ok: true, webCard: webCardDB });
  } catch (error: any) {
    console.error(error);
    res.status(500).send({ ok: false, error });
  }
}
// Get all the cards
export async function getAllWebCards(req: any, res: any) {
  try {
    const webCardDB = await WebCardModel.find({});
    
    // Process each web card to add status-specific information
    const processedWebCards = webCardDB.map((webCard) => {
      let latencyTime = 0;

      // Check the status and set the latencyTime accordingly
      switch (webCard.webStatus) {
        case 'green':
          latencyTime = 0.20;
          break;
        case 'orange':
          latencyTime = 0.50;
          break;
        case 'red':
          latencyTime = 1.0;
          break;
        default:
          latencyTime = -0;
          break;
      }
      return {
        ...webCard.toObject(),
        latencyTime,
      };
    });
    res.send({ ok: true, webCardDB: processedWebCards });
  } catch (error: any) {
    console.error("Can't get webCards");
    res.status(500).send({ ok: false, error });
  }
}


// Update one cards by id
export const UpdateWebCardDetails = async (req: any, res: any) => {
  try {
    const { webName, webStatus } = req.body;
    const _id = req.query._id;

    const webCardDB = await WebCardModel.findByIdAndUpdate(_id, {
      webName,
      webStatus,
    });

    if (!webCardDB) {
      throw new Error("No webCardDB found for the provided ID");
    }

    res.send({ ok: true });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// delete one card by id
export const deleteWebCardById = async (req: any, res: any) => {
  try {
    const { _id } = req.query;
    if (!_id) throw new Error("Web Card id not found");
    const webCardDB = await WebCardModel.findByIdAndDelete(_id);

    if (!webCardDB) throw new Error("web CardDB not found");
    res.status(201).send({ ok: true, webCardDB: webCardDB });
  } catch (error) {
    res.status(500).send({ ok: false });

    console.error(error);
  }
};
