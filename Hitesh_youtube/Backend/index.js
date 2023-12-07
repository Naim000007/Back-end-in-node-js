const express = require('express');
const app =express();
const cors = require('cors');


const port = process.env.PORT || 3000;
app.use(cors());

app.get('/', (req, res)=>{
    res.send('hello world')
})

app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            "id": 1,
            "title": "A Potato's Dream",
            "content": "Why did the potato apply for a job? It wanted to become a chip off the old block!"
        },
        {
            "id": 2,
            "title": "The Musical Tomato",
            "content": "What did the tomato say to the cucumber during band practice? 'Lettuce ketchup!'"
        },
        {
            "id": 3,
            "title": "Coffee Break",
            "content": "Why did the coffee file a police report? It got mugged!"
        },
        {
            "id": 4,
            "title": "The Talkative Toothbrush",
            "content": "Why did the toothbrush go to therapy? It had too many bristle issues!"
        },
        {
            "id": 5,
            "title": "The Forgetful Banana",
            "content": "Why did the banana go to therapy? It couldn't peel with the stress!"
        }
    ];
    res.json(jokes);
})

app.listen(port)