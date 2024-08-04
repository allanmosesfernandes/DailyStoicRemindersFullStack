import * as dotenv from 'dotenv';
dotenv.config()
import app from "./server";

app.listen(5432, () => {
    console.log('server started on localhost: 5432');
})