const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); 

app.use((req, res, next) => {
  next();
});

app.post('/p', (req, res) => {
  const trackingData = req.body;

  if (Object.keys(trackingData).length === 0) {
    console.log('No data received');
  } else {
    console.log('Received Data from index.html:', JSON.stringify(trackingData, null, 2));
  }
  res.status(200).send('Data received');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening for analyitics data on http://localhost:${PORT}`);
  console.log("Open ./index.html in a browser and allow the geolocation popup!");
});