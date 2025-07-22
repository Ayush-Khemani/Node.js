const express = require('express');
const z = require('zod')
const app = express();

const schema = z.array(z.number());

app.use(express.json())

app.post('/health-checkup', function(req, res) {

    // Kidneys = [1,2]
    console.log("Reached Here! ");
    
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if (!response.success) {
        res.status(411).send("Input is invalid")
    }
    res.send({
        response
    })
})






app.listen(3000);