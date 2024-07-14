const express = require("express"); 
const cors = require("cors");
const arsipRouter = require('./router/arsipRouter')
const kategoriRouter = require('./router/kategoriRouter')

const app = express(); 
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors()); 

app.use('/arsip', arsipRouter)
app.use('/kategori', kategoriRouter)
app.use('/upload', express.static('upload'));

app.listen(3000, () => {
  console.log("Server Berjalan di Port 3000");
});
