const express = require ('express');
const app = express();
const fs = require('fs');

app.use(express.static('public'));

app.use(express.urlencoded({
  extended: true
}));

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


app.post('/submit-form',jsonParser, (req, res) => {
		
		// creating variables for the form inputs
	const First = req.body.FirstName;
	const Last = req.body.LastName;
	const Email = req.body.Email;
	const PhoneNum = req.body.PhoneNumber;
	const HouseNum = req.body.HouseNum;
	const Postcode = req.body.Postcode;
	const Ethnicity = req.body.Ethnicity;
	const DateOfBirth = req.body.dob;
	const Gender = req.body.gender;
	const FirstTest = req.body.firstTest;
	const SecondTest = req.body.secondTest;
	const Comments = req.body.comments;

		// creating a object
	response = {
		First_Name: First,
		Last_Name: Last,
		Email: Email,
		Phone_Number: PhoneNum,
		House_Number: HouseNum,
		Postcode: Postcode,
		Ethnicity: Ethnicity,
		Date_Of_Birth: DateOfBirth,
		Gender: Gender,
		First_Test: FirstTest,
		Second_Test: SecondTest,
		Comments: Comments
	}
		// adding the above object to the file in string form
	fs.writeFile('data.json', JSON.stringify(response), err =>{
		if (err) return console.log(err);
		console.log('file saved')
	});
	return res.redirect('/userpage.html');
	
});

		// listening to port 3000, logs this
app.listen(3000, function(){
	console.log('server listening on port 3000');
});