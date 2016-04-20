//ENG: Set moduleName variable with the module you want to verify that can be resolved
//SP: Cambia el valor de la variable moduleName usando el nombre del modulo a resolver
var moduleName="express";

try {
    console.log(require.resolve(moduleName));
} catch(e) {
    console.error(moduleName + " is not found");
    process.exit(e.code);
}
