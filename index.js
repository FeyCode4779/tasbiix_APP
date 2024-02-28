import express from 'express';
import mongoose from 'mongoose';
import tasbiixRoutes from './routes/tasbiixRoutes.js';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
app.use(express.json());
const port = 6666;
app.use('/api/tasbiix',tasbiixRoutes)

app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost: ${port}`)
})

const Tasbiix = mongoose.connect(process.env.MONGO_URL).then(()=> {
    console.log("Connected to Database")
})

export default Tasbiix