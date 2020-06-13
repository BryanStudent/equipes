// yarn add pg

const Pool = require('pg').Pool;

// 1- Abrir conexão
// 2- Executar comando SQL
// 3- Fechar a conexão

const pool = new Pool({
    user: 'hulmyfxmbydawc',
    password: 'de4d1ac4bfa9f6e0e7341fe149fdf1fa6875f6cdbfaf3c5a0f551ae6e92c3886',
    host: 'ec2-34-194-198-176.compute-1.amazonaws.com',
    database: 'd385p8ieoa2nq2',
    port: 5432,
    ssl: { rejectUnauthorized: false }
})

/*const sql = `
   DROP TABLE equipes`;

    pool.query(sql, function (erro, resultado) {
    if (erro)
        throw erro;
    console.log('Tabela criada com sucesso!')});*/


//Create Table
 const sql_add = `
    CREATE TABLE IF NOT EXISTS equipes(
        id serial primary key,
        nome varchar not null (50),
	valormercado numeric not null(5,2),
        arena varchar not null(50)
    )
`
pool.query(sql_add, function (erro, resultado) {
    if (erro)
        throw erro
    console.log('Tabela criada com sucesso!')});


//INSERT
/* const sql = `
    INSERT INTO livros (nome, valormercado, arena)
        VALUES
            ('Dallas Mavericks', '1000000.00','Porzings')
            `;
pool.query(sql, function(erro, resultado) {
    if (erro)
        throw erro
    console.log('Inserido com sucesso');
}); */

// SELECT no arquivo server.js













