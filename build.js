const { spawn } = require('child_process');

// Define o comando de build que você deseja executar
const buildCommand = 'yarn test';

// Executa o comando de build
const buildProcess = spawn(buildCommand, { shell: true });

buildProcess.stdout.on('data', (data) => {
  console.log(data.toString());
});

buildProcess.stderr.on('data', (data) => {
  console.error(data.toString());
});

buildProcess.on('exit', (code) => {
  if (code === 0) {
    console.log('completed');
  } else {
    console.error(`Erro ao executar o comando de build: ${code}`);
  }
});
