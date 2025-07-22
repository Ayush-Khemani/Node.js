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


// Global Catches
app.use(function(err, req, res, next) {
    res.json({
        msg : "Something is up with our server"
    })
});



app.listen(3000);