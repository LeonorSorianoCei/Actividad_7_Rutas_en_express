import misLibros from './db/datos.js';
import express from "express";
import { PORT } from './config/config.js';

const app = express();
console.clear();

// Obtener todos los libros
app.get("/libros", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  misLibros.msg = "libros encontrados";
  misLibros.cant = misLibros.libros.length;
  res.statusCode = 200;
  res.send(misLibros);
});

// Obtener un libro por su ID
app.get("/libros/:id", (req, res) => {
  const id = req.params.id;
  const libro = misLibros.libros.find(libro => libro.id === parseInt(id));

  if (libro) {
    res.send(libro);
  } else {
    res.status(404).send("Libro no encontrado");
  }
});

// Buscar libros por autor version 1
/**
 * app.get("/libros/author/:author", (req, res) => {
  const author = req.params.author;
  const libros = misLibros.libros.filter(libro => libro.autor.toLowerCase() === author.toLowerCase());
  res.send(libros);
});
 */



// Buscar libros por autor version 2
app.get("/libros/author/:author", (req, res) => {
    const author = req.params.author.toLowerCase();
    const autoresUnicos = [...new Set(misLibros.libros.map(libro => libro.autor.toLowerCase()))];
  
    if (autoresUnicos.includes(author)) {
      const libros = misLibros.libros.filter(libro => libro.autor.toLowerCase() === author);
      res.send(libros);
    } else {
      res.status(404).send("Autor no encontrado");
    }
  });
/**
 * primero obtienes la lista única de autores (ignorando mayúsculas y minúsculas). Luego, verificas si el autor proporcionado en la solicitud está en esa lista. Si es así, filtras los libros correspondientes a ese autor. Si no, devuelves un mensaje de "Autor no encontrado".
 */
  

// Buscar libros por categoría
app.get("/libros/categoria/:category", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const category = req.params.category;
  const libros = misLibros.libros.filter(libro => libro.categoria.toLowerCase() === category.toLowerCase());

  res.send(libros);
});

// Obtener lista de autores
app.get("/authors", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const autores = [...new Set(misLibros.libros.map(libro => libro.autor))];
  res.send(autores);
});

// Obtener lista de categorías
app.get("/cathegories", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const categorias = [...new Set(misLibros.libros.map(libro => libro.categoria))];
  res.send(categorias);
});

app.listen(PORT, () => {
  console.log(`El servidor se está ejecutando en el puerto http://localhost:${PORT}`);
});