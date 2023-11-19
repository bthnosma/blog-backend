const express = require('express')
const router = express.Router()

var posts = 
[
        {
            title: 'Sonunda Bloğumu Açtım',
            content: 'Uzun zamandır tekrar blogumu acmak istiyordum. Sonunda işten güçten vakit bulup bloğumu yayına aldım.',
            createDate: '11.19.2023',
            author: 'Batuhan Osma'
        }
];

  // define the home page route
  router.get('/', (req, res) => {
    res.json(posts);
  });

  // define the detail route
  router.get('/:id', (req, res) => {
    res.send(req.params.id);
  });

  module.exports = router