import express from 'express';
import mongoose from 'mongoose';
import Pokemon from './models/Pokemon.js';

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://jose:<senhaforte123>@cinema.stsi1qm.mongodb.net/?appName=cinema")
    .then(() => console.log('Conectado ao Banco de Dados :)'))
    .catch((error) => console.error('Deu RUIM :0:', error));

app.post('/pokemons', async (req, res) => {
    const novoPokemon = await Pokemon.create(req.body);
    return res.json(novoPokemon);
});

app.get('/pokemons', async (req, res) => {
    const pokemons = await Pokemon.find();
    return res.json(pokemons);
});

app.get('/pokemons/:nome', async (req, res) => {
    const pokemon = await Pokemon.findOne({ nome: req.params.nome });
    return res.json(pokemon);
});

app.put('/pokemons/:nome', async (req, res) => {
    const pokemonAtualizado = await Pokemon.findOneAndUpdate({ nome: req.params.nome }, req.body, { new: true });
    return res.json(pokemonAtualizado);
});

app.delete('/pokemons/:nome', async (req, res) => {
    await Pokemon.findOneAndDelete({ nome: req.params.nome });
    return res.json({ mensagem: 'Pokemon deletado com sucesso!' });
});

app.listen(5500, () => console.log('Servidor rodando na porta 5500'));
