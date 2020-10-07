const man = {};

man.name = 'Alex';
man.lastName = 'Smith';
man.name = 'Bob';

delete man.name;
delete man.lastName;

console.log(man);