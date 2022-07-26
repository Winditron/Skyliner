import nextConnect from "next-connect";
import multer from "multer";
import mongodb from "../../../../utils/mongodb";
import Article from "../../../../models/Article";
import { object, string } from "yup";
import yupErrorFormatter from "../../../../helpers/yupErrorFormatter";
import AuthService from "../../../../services/AuthService";
import pogo from "../../../../config"; //rename because of config from next apiroute

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/articles/images",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRoute = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(async (req, res) => {
  AuthService.apiMustLoggedIn(req, res);
});

const uploadMiddleware = upload.single("file");
apiRoute.use(uploadMiddleware);

apiRoute.post((req, res) => {
  res.status(200).json({
    location: `${pogo.base.publicUrl}/articles/images/${req.file.filename}`,
  });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
