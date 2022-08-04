import nextConnect from "next-connect";
import multer from "multer";
import AuthService from "../../../../services/AuthService";
import pogo from "../../../../config"; //rename because of config from next apiroute

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/articles/images",
    filename: (req, file, cb) => {
      const randNum = Math.floor(Math.random() * 100000000000);
      cb(null, `${randNum}-${file.originalname}`);
    },
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

const uploadMiddleware = upload.single("file");
apiRoute.use(uploadMiddleware);

apiRoute.post((req, res) => {
  AuthService.apiMustLoggedIn(req, res);

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
