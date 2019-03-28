var expr=require('express');
var app = expr();


app.use(expr.static(__dirname+'/public'));
app.use(expr.static(__dirname+'/private'));
app.get('/',(req,res) =>{
	//res.send('<h1> this is our first express pagesssss</h1>')
	var obj={
		'name':'nakul',
		'section':100
		
		
	}
	res.send(obj);
	
});


app.get('/course',(req,res)=>{
	res.send("my course is 'bca' ");
	
});



app.get('/grades',(req,res)=>{
	res.send("my total cgpa is'7.65' ");
});

app.get('/attendance',(req,res)=>{
	res.send("python:69% nodejs:85% mobileapp:90% ");
});


app.listen(3000);