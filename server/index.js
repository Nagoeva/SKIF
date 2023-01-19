import express  from 'express' 
import morgan  from 'morgan' 
import router from './routes.js' 
// import api  from './API'
import path  from 'path'
import * as dotenv from 'dotenv' 

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;


app.use('/', express.static( path.resolve(__dirname, '../dist') ) ); // путь для всех элементов
app.use(morgan(':method :url :status :res[content-length] :response-time ms')); // выведение в консоль всех запросов
app.use(express.json());  // позволяет получать json-files
app.use(express.urlencoded({extended: false})); // middle var - позволяет принимать body в запросах
// app.use(api); // API
app.use(router); // roter





// start server
app.listen(PORT, (err)=>{
	err ? console.log(err) : console.log(`PORT: ${PORT}`);
})
