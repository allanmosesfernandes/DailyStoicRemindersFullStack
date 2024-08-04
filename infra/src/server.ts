import express from "express"
import {createNewUser, signIn} from "./handlers/user";
import {signInValidationRules, userValidationRules, validate} from "./modules/middlewares";
import morgan from "morgan";
import cors from 'cors';

const app = express();

// Enable CORS
app.use(cors());


// Define a custom format string that includes the date and time
const customFormat = ':date[iso] :method :url :status :response-time ms - :res[content-length]';
app.use(morgan(customFormat))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    console.log('hello from express');
    res.status(200);
    res.json({message: 'hello'})
})

/* User Routes */
app.post('/register', userValidationRules(),validate, createNewUser);
app.post('/signin', signInValidationRules(),validate, signIn);
export default app;