const express = require('express');
const Joi = require('joi'); // class oldugu için PascalCase
const app = express();

const port = process.env.PORT || 3000;

const birds = require('./birds');
const posts = require('./posts');

app.use(express.json()); //post u request de body i alabilmek için

app.get('/', (req, res) => {
  res.send('Ana sayfadasın')
});

app.get('/users', (req, res) => {
  res.json(
    [
      { name: 'batuhan', surname: 'osma' },
      { name: 'tunahan', surname: 'osma' }
    ])
});

//parametreli url bu şekil oluyor.
app.get('/user/:id', (req, res) => {
  // res.send(req.params.id) //urldeki id
  res.send(req.query) // query string deki değer
});

app.post('/user', (req, res) => {

 const schema = Joi.object({
  name: Joi.string().min(3).required()
 });

  const result = schema.validate(req.body);
 console.log(result);

  const user = { name: req.body.name, surname: req.body.surname };

  res.json(user);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use('/birds', birds);
app.use('/posts',posts);

