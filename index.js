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
		title:"mon article",
		content:"le super contenu",
		author:"farid ",
		boola:false,
		freinds: []
		}

	});

	
});