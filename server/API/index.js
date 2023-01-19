import express  from 'express' 

const router = express.Router();
const app = express();
app.use(express.urlencoded({extended: false})); // middle var - позволяет принимать body в запросах

export default router;
