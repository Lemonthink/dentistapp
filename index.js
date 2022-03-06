const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000   

app.use(express.static("assets"));
app.use(express.urlencoded({extended: false}))

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/homepage.html');
})

app.get('/app', function (req, res) {
	res.sendFile('app/index.html');
})

app.get('/download', function (req, res) {
	res.sendFile(__dirname + '/assets/app/download.html');
})

app.post('/download', function(req ,res) {
	res.send("Thank you for downloading our app!");
	console.log(req.body);
})

app.get('/patientform', function(req, res) {
	res.sendFile(__dirname +  '/assets/app/patientform.html');
});

app.post('/patientform', function(req, res) {
	console.log(req.body);
	res.send('THANK YOU FOR YOUR SUBMISSION!');
});

app.get('/feedbackForm', function(req, res) {
	res.sendFile(__dirname +  '/assets/app/feedbackForm.html');
});

app.post('/feedbackForm', function(req, res){
	res.send('THANKS');
});
app.get('/miro', function (req, res) {
	res.redirect('https://miro.com/app/board/o9J_llS_z48=/');
})

app.get('/dentist', function (req, res) {
    res.send('I will find a treatment you')
})

app.get('/data', function (req, res) {
	res.redirect('drug_info_datasets/UCIdrug_train.csv');
})

app.get('/readme', function (req, res) {
  res.sendFile(__dirname+'/README.md')
})

app.get('/search', function(req, res) {
	res.sendFile(__dirname +  '/assets/app/search.html');
});

app.post('/search', function (req, res) {
    res.send('Redirect to another page')
})

app.get('/toothfairy', function (req, res) {
    res.send('I will give you money for your tooth')
})

app.listen(PORT)
