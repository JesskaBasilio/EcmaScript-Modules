const databaseType = {
    userType: "admin",
    typeData: "datalocal",
}

async function connectToDatabase(dataName) {
    // lógica de conexão
    console.log(`conectado ao ${dataName}`);
}

async function disconnectDatabase() {
    console.log("desconectando do banco de dados");
}

//exportação através de objetos
export { connectToDatabase, disconnectDatabase, databaseType };