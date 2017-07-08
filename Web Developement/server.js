var express = require('express');
var app = express();

var port = 3001;

app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('Server state at' + port);

app.post('/api/login' , function(req, res)
{ 
	var results= [{
 title: "Java",
	student: "kadu",
	level: "Beignner" ,
	total_score: 50 }
,{
	title: "C",
	student: "kudu",
	level: "Intermideate" ,
	total_score: 60
},
{
	title: "C+",
	student: "kedu",
	level: "Good" ,
	total_score: 70
},
{
	title: "UI",
	student: "Satya",
	level: "Master" ,
	total_score: 90


}];

res.json(results);
})