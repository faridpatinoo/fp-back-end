const dotenv = require('dotenv').config({ path: 'config.env' });
const mongoose = require('mongoose');

const app = require('./app')

app.get('/', (req, res) => {
  res.send('FP+backend');
})

const db_password = process.env.PASSWORD;
const db = `mongodb+srv://fcpatino5:${db_password}@cluster0.veqds.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(db)
  .then(() => console.log('Successfully Connection to MongoDB'))
  .catch((err) => console.error('Error MongoDB:', err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Port running on ${port}`);
});