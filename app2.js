
const argv = require('yargs')
  .command('listar', 'Imprime en consola la tabla de multiplicar', {
      base: {
        demand: true,
        alias: 'b'
      },
      limite: {
        alias: 'l',
        default: 10

      }
  })
  .command('crear', 'Genera un archivo con la abla de multiplicar', {
    base: {
      demand: true,
      alias: 'b'
    },
    limite: {
      alias: 'l',
      default: 10

    }
})
  .help()
  .argv;


// const multiplicar = require('./multiplicar/multiplicar');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch( comando ) {

  case 'listar':
    listarTabla(argv.base, argv.limite);
    // console.log('Listar');
    break;

  case 'crear':
    crearArchivo(argv.base, argv.limite)
       .then( archivo => console.log(`Archivo creado: ${ archivo }`))
       .catch(e => console.log(e));
    break;

  default:
    console.log('Comando no reconocido');   

}

console.log( argv );

// console.log(module);
// console.log(process.argv);

// let argv2 = process.argv;

// console.log(argv.base);
// console.log('Limite', argv.limite);


// let parametro = argv[2];
// // let base = '5';
// let base = parametro.split('=')[1];

// crearArchivo(base)
//   .then( archivo => console.log(`Archivo creado: ${ archivo }`))
//   .catch(e => console.log(e));