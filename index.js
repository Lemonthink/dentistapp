const express = require('express');
const mongodb = require('mongodb');

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

app.post('/patientform', async function(req, res) {
	console.log(req.body);
	const collection = db.collection('patientform');
	const result = await collection.insert(req.body);
	const id = result.insertedIds[0];
	res.redirect('/patientform' + id);
});

app.get('/feedbackForm', function(req, res) {
	res.sendFile(__dirname +  '/assets/app/feedbackForm.html');
});
// console is ...to print messages or send information to user
app.post('/feedbackForm', function(req, res){
	console.log(req.body);
	// res.send means ...sends response to the formm being submitted
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

app.post('/search',  async function (req, res) {
	console.log(req.body);
	const collection = db.collection('search');
	const result = await collection.insert(req.body);
	res.send(result);
})

app.get('/toothfairy', function (req, res) {
    res.send('I will give you money for your tooth')
})

app.post('/test', function(req, res) {
	console.log(req.body);

	//SAVE THE DATA INTO THE DATABASE
	const collection = db.collection('test');

	res.send('THANK YOU FOR THE TEST');
})

// CONNECT TO OUR DATABASE
const MongoClient = mongodb.MongoClient;
const client = new MongoClient('mongodb://localhost:27017');
const dbName = 'iDENTify';
let db;

async function run() {
	//WAITING FOR CLIENT TO CONNECT TO DB
	
	await client.connect();
	console.log('RUNNING')
	db = client.db(dbName);
	console.log('LISTENING TO PORT ' + 3000);
	app.listen(PORT);
	
}

run();

