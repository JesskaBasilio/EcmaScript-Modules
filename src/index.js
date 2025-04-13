// importe tudo (*), dê o apelido de database, de onde? do caminho que tem a extensão .js
//import * as database from './utils/database.js';

//processo de desestruturação (traz somente o que quer trabalhar)
import { disconnectDatabase, databaseType } from './utils/database.js';

import { getDataFromApi } from './utils/api.js';
import * as api from "./utils/api.js";

api.getDataFromApi();
getDataFromApi();
disconnectDatabase();
//console.log(databaseType);

// database.connectToDatabase("my-database");
// database.disconnectDatabase();