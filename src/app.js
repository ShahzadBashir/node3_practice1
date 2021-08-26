const path=require('path');
const hbs=require('hbs');
const express=require('express');
const app=express();

//Path For Views 
const viewsPath=path.join(__dirname,'../templates/views');
//Path For Partials
const partialsPath=path.join(__dirname,'../templates/partials');
//Path For Public Files
const staticFilesPath=path.join(__dirname,'../public')

app.set("view engine",'hbs');
app.set('views',viewsPath);
app.use(express.static(staticFilesPath));

//Setting WebPages
app.get('',(req,res)=>{
    res.render('index');
});

//Making Server
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});