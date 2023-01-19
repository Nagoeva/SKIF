import express  from 'express' 
import path from 'path';
// import {createPath} from './helpers'

const router = express.Router();
const app = express();
app.use(express.urlencoded({extended: false})); // middle var - позволяет принимать body в запросах

// ___________

// _____routes

router.get('/', (req, res)=>{
	res.sendfile(router.get('/', (req, res)=>{
		res.sendfile(path.resolve(__dirname, '../Front-end', `index.html`))
	}))
})



export default router;
