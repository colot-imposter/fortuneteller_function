// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

let nn=['5', '6','7','8', '9', '10', '20', '26', '0']
let zz=['Jedd', 'Hans', 'Georff', 'Jeb Bush', 'Trump', 'Larn', 'Q', 'Pail', 'Pale', 'Paulen', 'Pauler','Pank', 'Polton', 'Hanpf', 'John']
let yy=['Nederlaende', 'die Schweitz', 'Kalifornien', 'Ever_After', 'Austin', 'NYC', 'Under A Bridge', 'Bush Ranch']
let xx=['Dev', 'Front ender', 'first man', 'ranch hand', 'comedian', 'writter', 'plumber', 'human']


function doublerandom (e)
  {let rndNum= Math.floor(Math.random() * e.length)
  return rndNum
}
function future (x,y,z,n)
{
let reading = "You will be a "+ x[doublerandom(x)] + " in " + y[doublerandom(y)] + " and married to " + z[doublerandom(z)]+ " with " + n[doublerandom(n)] + ' kids.'

return reading
}

console.log(future(xx,yy,zz,nn))


function tellFortune( numberOfChildren, partnersName, geoLocation, jobTitle ) {
	console.log(`You will be a ${jobTitle} in ${geoLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`);
}
tellFortune(3, 'Betsy', 'Dallas', 'Nurse');
tellFortune(4, 'Lisa', 'Austin', 'Doctor');
tellFortune(5, 'Jennifer', 'Houston', 'Lawyer');
