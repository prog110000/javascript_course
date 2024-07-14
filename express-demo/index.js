const express = require('express');
const app = express();

const courses = [
    { id: 1, name: 'courses1' },
    { id: 2, name: 'courses2' },
    { id: 3, name: 'courses3' }
]

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/:id/:year/:month', (req,res) => {
    res.send(req.params);
});

/*
app.get('/api/:id/:year/:month', (req,res) => {
    res.send(req.query);  //?sortby=query
});*/

/*app.get('/api/:id', (req,res) => {
    res.send(req.params.id);
});
*/
app.get('/api/courses', (req,res) =>{
    res.send(courses)
})

app.get('/api/courses/:id', (req,res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given  ID was not found.');
    res.send(course);
})



const port = process.env.port || 3000
app.listen(port, () => console.log(`Listen on port ${port}...`));