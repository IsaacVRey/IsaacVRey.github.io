import chalk from 'chalk';

for (let i = 0; i < 10; i++){
    console.log(chalk.red.inverse('Hola'),
    chalk.yellow.dim('Hola'),
    chalk.green.italic('Hola'),
    chalk.cyan.underline('Hola'),
    chalk.blue.strikethrough('Hola'),
    chalk.magenta.hidden('Hola'),
    chalk.white.visible('Hola'),
    chalk.gray.bgBlueBright.bold('Hola'),
    chalk.black.bold('Hola'))
}