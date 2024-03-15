db.createCollection("users");

db.users.insertMany([{
    nombres: "Juan",
    apellidos: "Pérez",
    correo: "juanperez@example.com",
    ciudad: "Buenos Aires",
    país: "Argentina",
    salario: 3000,
    edad: 30,
    altura: 175,
    peso: 160
},
{
    nombres: "María",
    apellidos: "Gómez",
    correo: "mariagomez@example.com",
    ciudad: "Madrid",
    país: "España",
    salario: 3500,
    edad: 28,
    altura: 165,
    peso: 140
},
{
    nombres: "John",
    apellidos: "Smith",
    correo: "johnsmith@example.com",
    ciudad: "New York",
    país: "United States",
    salario: 4000,
    edad: 35,
    altura: 180,
    peso: 180
},
{
    nombres: "Luisa",
    apellidos: "Martínez",
    correo: "luisamartinez@example.com",
    ciudad: "Lima",
    país: "Perú",
    salario: 2800,
    edad: 32,
    altura: 160,
    peso: 130
},
{
    nombres: "David",
    apellidos: "Brown",
    correo: "davidbrown@example.com",
    ciudad: "London",
    país: "United Kingdom",
    salario: 4500,
    edad: 40,
    altura: 185,
    peso: 200
},
{
    nombres: "Ana",
    apellidos: "González",
    correo: "anagonzalez@example.com",
    ciudad: "Barcelona",
    país: "Spain",
    salario: 3200,
    edad: 25,
    altura: 170,
    peso: 150
},
{
    nombres: "Michael",
    apellidos: "Johnson",
    correo: "michaeljohnson@example.com",
    ciudad: "Los Angeles",
    país: "United States",
    salario: 3800,
    edad: 33,
    altura: 178,
    peso: 170
},
{
    nombres: "Sofía",
    apellidos: "Hernández",
    correo: "sofiahernandez@example.com",
    ciudad: "Mexico City",
    país: "Mexico",
    salario: 3100,
    edad: 29,
    altura: 163,
    peso: 135
},
{
    nombres: "Pedro",
    apellidos: "Alvarez",
    correo: "pedroalvarez@example.com",
    ciudad: "Santiago",
    país: "Chile",
    salario: 2900,
    edad: 27,
    altura: 175,
    peso: 155
},
{
    nombres: "Emily",
    apellidos: "Davis",
    correo: "emilydavis@example.com",
    ciudad: "Sydney",
    país: "Australia",
    salario: 4200,
    edad: 37,
    altura: 168,
    peso: 145
}
]);

// 1.Obtener todos los usuarios que sean mayores de 18 años.
db.users.find({edad: {$gt: 18}});

// 2. Obtener todos los usuarios que sean de Londres o de París.
db.users.find({$or: [{ciudad: "London"}, {ciudad: "Paris"}]});

// 3. Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.
db.users.find({
    salario: {$gt: 2000},
    edad: {$lt: 30}
});

// 4. Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
db.users.find({
    país: "España",
    salario: {$gt: 3000}
});

// 5. Obtener todos los usuarios que tengan entre 25 y 35 años.
db.users.find({
    edad: {$lte: 25},
    edad: {$gte: 35}
});

// 6. Obtener a todos los usuarios que no sean de Estados Unidos.
db.users.find({ país: {$ne: "Estados Unidos"}});

// 7. Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.
db.users.find({ 
    $and: [
        {ciudad: "Londres"},
    {
        $or: [
            {salario: {$gt: 2500}},
            {edad: {$gt: 30}}
        ] 
    }
]
});

// 8. Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.
db.users.find({
    país: "Australia",
    peso: {$gt: 140}
});

// 9. Obtener a todos los usuarios que no sean de Londres ni de París.
db.users.find({
    ciudad: {$ne: "Londres"},
    ciudad: {$ne: "París"}
});

// 10. Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.
db.users.find({
    $or: [
        {salario: {$lt: 2000}},
        {edad: {$gt: 40}}
    ]
});

// 11. Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.
db.users.find({
    $and: [
        {país: "Canadá"},
        {
            $or: [
                {salario: {$gt: 4000}},
                {altura: {$gt: 180}}
            ]
        }
    ]
});

// 12. Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.
db.users.find({
    país: "Italia",
    edad: {$gle: 20},
    edad: {$lte: 30}
});

//  13. Obtener todos los usuarios que no tengan un correo electrónico registrado.
db.users.find({
    correo: {$exists: false},
});

// 14. Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.
db.users.find({
    país: "Francia",
    salario: {$gle: 3000},
    salario: {$lte: 5000}
});

// 15. Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras.
db.users.find({
    país: "Brasil",
    peso: {$lt: 120},
    peso: {$gt: 140}
});

// 16. Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.
db.users.find({
    $and: [
    {país: {$in: ["Argentina", "Chile"]}},
    {edad: {$lt: 25}},
    ]
});

// 17. Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.
db.users.find({
    $and: [
        {país: {$nin: ["España", "México"]}},
        {salario: {$lt: 3000}}
    ]
});

// 18. Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.
db.users.find({
    $and: [
        {país: "Alemania"},
        {
            $or: [
                {salario: {$lt: 4000}},
                {edad: {$gt: 35}}
            ]
        }
    ]
});

// 19. Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.
db.users.find({
    $and: [
        {país: {$nin: ["Colombia"]}},
        {altura: {$lt: 170}},
    ]
});

// 20. Obtener todos los usuarios que sean de India y que no tengan un salario registrado.
db.users.find({
    $and: [
        {país: "India"},
        {salario: {$exists: false}},
    ]
});