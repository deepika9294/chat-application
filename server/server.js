var express    = require('express'),
    bodyParser =  require('body-parser'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    app = express();

var PORT = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
    extended: false
    })
)


mongoose.connect('mongodb://localhost/Auth_data');

var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(PORT, function() {
    console.log(`server started on ${PORT}`);
})


