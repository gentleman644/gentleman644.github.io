'use strict';

(function() {
  const express = require('express');
  const app = express();
  
  // define endpoint for exercise 1 here
  app.get("/math/circle/:radius", (req, res) => {
    let radius = parseFloat(req.params['radius']);
    res.json({
      area: circleArea(radius),
      circumference: circleCircumference(radius)
    });
  });

  // define endpoint for exercise 2 here
  app.get("/hello/name/:firstName/:lastName", (req, res) => {
    let firstName = req.params['firstName'];
    let lastName = req.params['lastName'];
    res.type('text').send('Hello '+ firstName + ' '+ lastName);
  })

  app.get("/hello/name/:firstName", (req, res) =>{
    res.type('text').status(400).send('Missing Required GET parameters: last');
  })

  app.get("/hello/name", (req, res) =>{
    res.type('text').status(400).send('Missing Required GET parameters: first, last');
  })

  const PORT = process.env.PORT || 8000;
  app.listen(PORT);
})();

function circleArea(radius){
  return Math.PI * radius * radius;
}

function circleCircumference(radius){
  return 2 * Math.PI * radius;
}