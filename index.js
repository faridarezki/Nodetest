const express = require('express');
const fs = require ("fs");

const app =express();

app.listen(3000, ()=>{
	console.log("SERVER STARTED ..");
});

app.use(express.static('./public'));


app.get('/api/user',(req,res)=>{
	res.send({
		tableau:{
		name:"inconnu",
		vrified:true,
	birthdate:"01/01/1111",
		verified:false,
		freinds: []
		}

	});

	
});