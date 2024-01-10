const express = require('express');
const cors = require('cors');

const UserRouter = require("./Routers/userRouter")
const SalesRouter = require("./Routers/salesRouter")
const UtilRouter = require("./Routers/util")




const port = 5000;

//initialize express app
const app = express();

// middleware
app.use(express.json());
app.use(cors({
    origine: ['http://localhost:5173']
}));


app.use("/users" , UserRouter);
app.use("/sales", SalesRouter )
app.use("/util", UtilRouter );





app.listen(port, () => { console.log('server started')});