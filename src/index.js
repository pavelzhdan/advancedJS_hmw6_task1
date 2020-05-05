/* eslint-disable no-new */
/* eslint-disable no-prototype-builtins */
export default function Character(name, type) {
  const errorName = new Error('Имя должно содержать не менее 2 символов, но не более 10');
  const errorType = new Error('Такого класса не существует');
  const characterBase = {
    Bowman: { attack: 25, defence: 25 },
    Swordsman: { attack: 40, defence: 10 },
    Magician: { attack: 10, defence: 40 },
    Undead: { attack: 25, defence: 25 },
    Zombie: { attack: 40, defence: 10 },
    Daemon: { attack: 10, defence: 40 },
  };
  if (name.length > 10 || name.length < 2 || (!typeof name === 'string')) {
    return errorName;
  }
  if (!characterBase.hasOwnProperty(type) || (!typeof name === 'string')) {
    return errorType;
  }
  const { attack, defence } = characterBase[type];

  this.name = name;
  this.type = type;
  this.health = 100;
  this.level = 1;
  this.attack = attack;
  this.defence = defence;
}

new Character('Zn', 'Zombie');
