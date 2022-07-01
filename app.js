const express = require('express');
const app = express();
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());

app.get('/',(req,res)=>{
    res.render('main');
})
const port = process.env.PORT || 3002
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});
