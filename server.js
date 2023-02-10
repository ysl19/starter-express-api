const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const food = {
  'apple': {
    type : 'fruit',
    shelf_life : 5
  },

  'banana': {
    type: 'fruit',
    shelf_life: 7
  },

  'carrot': {
    type: 'vegetable',
    shelf_life: 14
  },

  'default': {
    type: 'default',
    shelf_life: 0
  }
}

app.get("/", (req, res) => {
  console.log("Just got a request!");
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:userInput", (req, res) => {
  const foodName = req.params.userInput.toLowerCase();

  food[foodName] ? res.json(food[foodName]): res.json(food['default'])

});

app.listen(process.env.PORT || 8000, () => {
  console.log(`We are on PORT ${process.env.PORT || 8000}`);
});
