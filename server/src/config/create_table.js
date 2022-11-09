import database from './config_db'

const sql = `CREATE TABLE shipment (
                id_Shipment INT NOT NULL AUTO_INCREMENT,
                Locaiton VARCHAR(255),
                ShipCost TEXT,
                PRIMARY KEY(id_Shipment)
            )`

database.query(sql, err => {
    if( err ) throw err
    console.log('Table successfully created!!');
})