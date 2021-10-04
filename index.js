const express = require('express');
const path = require('path')
const members = require('./member.js')

const app = express();

app.get('/api/members',(req, res) => {
    res.json(members)
})


//------------------------------------------------------------

// Simple static page express code
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

//------------------------------------------------------------


//Set a static folder so we dont define every path
app.use(express.static(path.join(__dirname, 'public')))
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('server started on' + 'HTTP://localhost:' + PORT))