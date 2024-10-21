const express = require ("express");
const app = express();
const port = 5000;

app.use(express.json());


//route test

app.get('/', (req, res)=> {
    res.send("API ok")
});

app.listen(port, ()=>{
    console.log(`Serveur demarré avec le port ${port}`)
});
