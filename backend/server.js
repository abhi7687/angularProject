const express = require('express');
const app = express();
const mongoose = require('mongoose');
var routes = require('./route/routes');
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:4200'
}));


app.listen(3000,function check(error){
    if (error) {
        console.log('Error',error);
    }
    else{
        console.log("Server is running on port ");
    }
});

mongoose.connect("mongodb://127.0.0.1:27017/appSheet_p",{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(error => {
    console.log('Error', error);
});

app.use(express.json());
app.use(routes);