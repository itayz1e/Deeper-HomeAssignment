import * as dotenv from "dotenv";
import WebCardModel from "./WebCardModel";
dotenv.config();

export async function addWebCard (req: any, res: any) {
    try {
      const { webName , webStatus } = req.body;
      const webCardDB = await WebCardModel.create({ webName , webStatus });

      res.send({ ok: true, webCard: webCardDB });
    } catch (error:any) {
      console.error(error);
      res.status(500).send({ ok: false, error });
    }
  }

  export async function getAllWebCards (req: any, res: any){
    try {
        const webCardDB = await WebCardModel.find({});
        res.send({ ok: true, webCardDB });
    } catch (error:any) {
        console.error("cant get webCards");
      res.status(500).send({ ok: false, error });
    }
  }