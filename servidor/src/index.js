const app = require('./app');
const pool = require('./database');

//configuracion







//inicar servidor
async function main(){
        await app.listen(app.get('port'));
        console.log("inicio servidor "+ app.get('port'));
}
main();
