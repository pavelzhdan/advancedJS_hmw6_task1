import Character from '../../index';

test('name error', () => {
  const result = new Character('Z', 'Zombie');

  expect(result).toEqual(Error('Имя должно содержать не менее 2 символов, но не более 10'));
});

test('type error', () => {
  const result = new Character('Zn', 'Zomie');

  expect(result).toEqual(Error('Такого класса не существует'));
});

test('new PC created', () => {
  const result = new Character('Zondar', 'Zombie');

  expect(result).toEqual({
    name: 'Zondar',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
