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
	res.redirect('/patientform/' + id);
});
app.get('/patientform/:id', async function(req, res) {
	const collection = db.collection('patientform');
	const{ObjectId} = require('mongodb')
	const result = await collection.find({_id: ObjectId(req.params.id)}).toArray();
	res.send(result);
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

app.post('/search', async function (req, res) {
	console.log(req.body);
	const collection = db.collection('search');
	const result = await collection.insert(req.body);
	const id = result.insertedIds[0]; 
	res.redirect('/search/' + id);
})

app.get('/search/:id', async function (req, res) {
	const collection = db.collection('search');
	const { ObjectId } = require('mongodb');
	const result = await collection.find({_id: ObjectId(req.params.id)}).toArray();
	res.send(result);
})

app.get('/toothfairy', function (req, res) {
    res.send('I will give you money for your tooth')
})


app.post('/test', async function(req, res) {

	console.log(req.body);

	//Creating the collection to store the data
	const collection = db.collection('test');

	//Storing the data into the databse
	const result = await collection.insert(req.body);

	// Get the id of the record
	const id = result.insertedIds[0];

	// Send the user to a page that shows the data that is in the database
	res.redirect('/test/' + id);
})

// :id means match any thing after /test/ so that we can
// our server use the same function for any path with that id
app.get('/test/:id', async function(req, res) {

	const collection = db.collection('test');
	// Ask the database to find a record with _id that
	// has a value of req.params.id which is the id
	// that was parsed from the path '/test/:id'
	const { ObjectId } = require('mongodb');
	const result = await collection.find({ _id: ObjectId(req.params.id) }).toArray();

	res.send(result)
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

