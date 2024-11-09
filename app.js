require('dotenv').config();
const express = require('express');
const path = require('path');
const basicAuth = require('express-basic-auth');

const app = express();
const PORT = 3000;

app.use(basicAuth({
    users: { [process.env.USERNAME]: process.env.PASSWORD },
    challenge: true,
    realm: "Restricted Access"
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const ingredientsRouter = require('./routes/ingredients');
const recipesRouter = require('./routes/recettes');

app.use('/ingredients', ingredientsRouter);
app.use('/recettes', recipesRouter);

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
