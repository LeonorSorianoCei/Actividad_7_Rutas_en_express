import misLibros from './db/datos.js'
import express from "express";
import {PORT} from './config/config.js';
const app = express();
console.clear();



app.get("/libros", (req, res)=>{
    res.setHeader("Content-Type", "application/json");
    misLibros.msg="libros encontrados";
    misLibros.cant=misLibros.libros.length;
    res.statusCode=200;
    res.send(misLibros);
});

app.get("/Libros/:id", (req, res)=>{
    const id=req.params.id;
    console.log("libros por id");
    res.send("objeto de libro");
});


app.get("/Libros/author/:author", (req, res)=>{
    const id=req.params.author;
    res.send("libros por autor");
});


app.get("/libros/categoria/:category", (req, res)=>{
    res.setHeader("Content-Type", "application/json");
    res.send("libros por categoria");
});

app.get("/authors", (req, res)=>{
    res.send("lista de autores");
});

app.get("/cathegories", (req, res)=>{
    res.send("lista de categorias");
});


app.listen(PORT,()=>{
    console.log(`server is running on port http://localhost:${PORT}`);
} )
