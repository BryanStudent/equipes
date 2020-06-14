const express = require('express');
const Pool = require('pg').Pool;
const cors = require('cors');


const server = express();
server.use(cors());

const pool = new Pool({
    user: 'hulmyfxmbydawc',
    password: 'de4d1ac4bfa9f6e0e7341fe149fdf1fa6875f6cdbfaf3c5a0f551ae6e92c3886',
    host: 'ec2-34-194-198-176.compute-1.amazonaws.com',
    database: 'd385p8ieoa2nq2',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})

server.use(express.json());

//SELECT SIMPLES (GET)

server.get('/equipes', async function(request, response) {
    const result = await pool.query('SELECT * FROM equipes');
    return response.json(result.rows);
})

//INSERT (POST)

server.post('/equipes', async function(request, response){
    const nome = request.body.nome;
    const valormercado = request.body.valormercado;
    const arena = request.body.arena;

    const sql = `
    INSERT INTO equipes (nome, valormercado, arena) VALUES ($1, $2, $3)
    `;

    await pool.query(sql, [nome, valormercado, arena]);
    return response.status(201).send();
});


//UPDATE (PUT)
server.put('/equipes/:id', async function(request, response) {
    const id = request.params.id;
    const { nome, valormercado, arena } = request.body;
    const sql = `UPDATE equipes SET nome = $1, valormercado = $2, arena = $3 WHERE id = $4`;
    await pool.query(sql, [nome, valormercado, arena, id]);
    return response.status(204).send();
})


//DELETE 
server.delete('/equipes/:id', async function(req, res){
    const id = req.params.id;

    sql = 'DELETE FROM equipes WHERE id = $1';

    await pool.query(sql, [id]);

    res.send();
})

server.listen(process.env.PORT || 3000);