function Dog (name, age) {
  this.name = name;
  this.age = age;
}
var ageDiff = function(dog1, dog2) {
  return Math.abs(dog1.age - dog2.age);
};
ageDiff(new Dog('Sparky', 12), new Dog('Molly', 8));