# Actividad_7_Rutas_en_express
a partir del siguiente JSON:
```json
{
"libros": [
{
     "id": 1,
     "titulo": "El nombre del viento",
     "autor": "Patrick Rothfuss",
     "categoria": "Fantasía"
},
{
     "id": 2,
     "titulo": "1984",
     "autor": "George Orwell",
     "categoria": "Ciencia ficción"
},
{
     "id": 3,
     "titulo": "Cien años de soledad",
     "autor": "Gabriel García Márquez",
     "categoria": "Realismo mágico"
}
]
}
```

Creen las siguientes rutas en Express para obtener información específica:

-Obtener todos los libros: Crea una ruta que devuelva todos los libros del objeto JSON.

-Obtener un libro por su ID: Crea una ruta que acepte un parámetro de ruta para el ID de un libro y devuelva el libro correspondiente.

-Buscar libros por autor: Crea una ruta que acepte un parámetro de consulta para el autor y devuelva todos los libros escritos por ese autor.

-Buscar libros por categoría: Crea una ruta que acepte un parámetro de consulta para la categoría y devuelva todos los libros de esa categoría.

-Obtener lista de autores: Crea una ruta que devuelva una lista de todos los autores sin repetición.

-Obtener lista de categorías: Crea una ruta que devuelva una lista de todas las categorías sin repetición.




# Para comprobar cada url acceder aquí:
(herramienta para convertir palabras en urls: 
https://onlinetools.com/utf8/url-encode-utf8 )


·Obtener todos los libros: http://localhost:8080/libros

·Obtener un libro por su ID: http://localhost:8080/libros/{id} 
(Reemplaza {id} con el ID real del libro que deseas buscar.)

     ej: http://localhost:8080/libros/1

·Buscar libros por autor: http://localhost:8080/libros/author/{author} 
(Reemplaza {author} con el nombre del autor que deseas buscar.)

      ej: http://localhost:8080/libros/author/Patrick%20Rothfuss

     ejemplo con autor repetido: http://localhost:8080/libros/author/George%20Orwell


·Buscar libros por categoría: http://localhost:8080/libros/categoria/{category} 
(Reemplaza {category} con el nombre de la categoría que deseas buscar.) 

     ej: http://localhost:8080/libros/categoria/Realismo%20m%C3%A1gico

·Obtener lista de autores: http://localhost:8080/authors

·Obtener lista de categorías: http://localhost:8080/cathegories



