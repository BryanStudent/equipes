// yarn add pg

const Pool = require('pg').Pool;

///1 - Abrir a conexão
//2 - Executar o comando SQL (query, insert)
//3 - Fechar a conexão

const pool = new Pool({  
    user: 'hulmyfxmbydawc', 
    password: 'de4d1ac4bfa9f6e0e7341fe149fdf1fa6875f6cdbfaf3c5a0f551ae6e92c3886',
    host: 'ec2-34-194-198-176.compute-1.amazonaws.com',
    database: 'd385p8ieoa2nq2',
    port: '5432',
    ssl: { rejectUnauthorized: false }
})

/*const sql = `
    CREATE TABLE IF NOT EXISTS equipes
    (
        id serial primary key,
        nome varchar(255) not null,
       valormercado numeric(7,2) not null,
         arena varchar(50) not null
     )
 `;

 pool.query(sql, (error, result) => {
   if(error)
        throw error
    
     console.log('Tabela criada com sucesso!');
});*/


 //INSERT
 /*const sql_insert = `
         INSERT INTO equipes (nome, valormercado, arena) VALUES ('Dallas Mavericks','9000.00', 'American Airlines Center')
`;

 pool.query(sql_insert, function(error, result) {
     if(error)
         throw error;

    console.log(result.rowCount);
 })
 */

 //SELECT
/*const sql_select = `SELECT * FROM equipes`;

pool.query(sql_select, function(error, result) {
   if(error)
       throw error;

    console.log(result.rows);
 })
*/
