import database from './config_db'

const sql = `CREATE TABLE dummyimg (
                id INT NOT NULL AUTO_INCREMENT,
                text VARCHAR(255),
                img TEXT,
                PRIMARY KEY(id)
            )`

database.query(sql, err => {
    if( err ) throw err
    console.log('Table successfully created!!');
})