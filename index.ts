import express from 'express';
import bodyParser from 'body-parser';
import { router } from './src/routers/routers';

const PORT = 3000;
const app = express();

//cau hinh use:
app.use(bodyParser.json());
app.use(express.json());

//routers
app.use(router);


//listen on port
app.listen(PORT,"localhost",()=>{
    console.log(`App listening on port http://localhost:${PORT}`);
});