const express = require('express');
const path = require('path');
const app = express();


app.set('port', process.env.PORT || 3000);


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '/public')));


app.use(require('./routes/route.routes'));


app.listen(app.get('port'), (req, res) => {
    console.log('Server on port', app.get('port'));
});