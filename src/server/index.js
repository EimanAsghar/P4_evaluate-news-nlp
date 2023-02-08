const dotenv = require('dotenv');
dotenv.config();


var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

// Create an instance for the server
const app = express()

// Configure cors to avoid cors-origin issue
const cors = require('cors');

// Configure express to use body-parser as middle-ware.
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());


// Configure express static directory.
app.use(express.static('dist'))

console.log(__dirname)

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env['API_KEY'];
console.log(`API Key: ${process.env.API_KEY}`);
let userURL= [];

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})


app.post('/sendData', async function(req, res) {
    userURL = req.body.url;

    const apiData = `${baseURL}key=${apiKey}&url=${userURL}&lang=en`

    const response = await fetch(apiData)
    const data = await response.json()

    const sendData = {
        score_tag: data.score_tag,
        confidence: data.confidence,
        irony: data.irony,
        subjectivity: data.subjectivity,
      };
      
    console.log(sendData)
    res.send(sendData)

})


// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

