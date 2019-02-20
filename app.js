const express=require('express');
const app=express();
app.get('/',function(req,res){
  res.end('iniciado');
});
app.listen(3000,function(){
  console.log('el servidor iniciado');
})
