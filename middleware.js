const express = require('express');

const app = express();

app.get('/', function(req, res) {

    const username = req.headers.username;
    const pass = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username == 'har' && pass == 'pass') {
        if (kidneyId == 1 || kidneyId == 2) {
                    
        res.json({
            msg : "Your kidney is fine"
        })
        }

    }   
    
})

app.listen(3000);