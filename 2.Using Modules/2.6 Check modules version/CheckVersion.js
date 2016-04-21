//ENG:just use this script on the root folder where node_modules folder is, removing depth you get all, depth 0 just level 0 dependencies
//SP: Usa este script desde la root folder donde se encuentra la carpeta node_modules, eliminando el parametro depth se obtienen todas las dependencias

require('child_process').exec('npm list --depth=0', function(err, stdout, stderr) {
    if (err) return console.log(err);
    console.log(null, JSON.parse(stdout));
  });