//index.test.js

const holaMund = require('./index');

test('Comprobacion del mensage de saludo', () => { 
    expect(holaMund()).toBe('Hola, Mundo Otto Gonzalez (2022-0121)');
}); 
