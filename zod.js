const express = require('express');

const app = express();


app.use(express.json())

app.post('/health-checkup', function(req, res) {

    // Kidneys = [1,2]
    console.log("Reached Here! ");
    
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have " + kidneyLength + " kidneys");
})






app.listen(3000);