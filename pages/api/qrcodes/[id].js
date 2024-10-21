import dbConnect from "@/db/dbConnect";
import QRCode from "@/db/models/QRCode";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const qrCode = await QRCode.findById(id);
      res.send(qrCode);
      break;
    case "PATCH":
      const updateQRCode = await QRCode.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.send(updateQRCode);
      break;
    case "DELETE":
      await QRCode.findByIdAndDelete(id);
      res.status(204).send();
      break;
    default:
      res.status(404).send();
      break;
  }
}
