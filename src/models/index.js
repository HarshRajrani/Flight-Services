
import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import dotenv from 'dotenv';
import Airplane from './airplane.js';
import City from './city.js';
import Airport from './airport.js';
import Flight from './flight.js';
import Seat from './seat.js'

dotenv.config();


// Load config.json
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

let sequelize;

if (dbConfig.url) {
  sequelize = new Sequelize(dbConfig.url, {
    dialect: dbConfig.dialect,
    dialectOptions: dbConfig.dialectOptions || {}
  });
} else {
  sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    dbConfig
  );
}
sequelize.authenticate()
  .then(() => console.log("Database Connected Successfully"))
  .catch(err => console.error("DB Connection Error:", err));

// Initialize models
const db = {};
db.Airplane = Airplane.initModel(sequelize);
db.City = City.initModel(sequelize);
db.Airport = Airport.initModel(sequelize);
db.Flight = Flight.initModel(sequelize);
db.Seat = Seat.initModel(sequelize);

//  call associations
db.Airplane.associate(db);
db.Airport.associate(db);
db.City.associate(db);
db.Flight.associate(db);
db.Seat.associate(db);

db.Sequelize = Sequelize;

export default db;
