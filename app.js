function helloCodeFellows(){
  console.log('Executing heloCodeFellows');
  return('EXIT');

}
var testAlpha = helloCodeFellows();
var testBeta = helloCodeFellows;
console.log('testAlpha: '+testAlpha);
console.log('testBeta: '+testBeta);