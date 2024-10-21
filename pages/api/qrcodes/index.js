import dbConnect from "@/db/dbConnect";
import QRCode from "@/db/models/QRCode";

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case "GET":
      const qrCodes = await QRCode.find();
      res.send(qrCodes);
      break;
    case "POST":
      const qrCode = await QRCode.create(req.body);
      res.status(201).send(qrCode);
      break;
    default:
      res.status(404).send();
      break;
  }
}
