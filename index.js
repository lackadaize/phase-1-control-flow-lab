// Scuber if elseif and else function
function scuberGreetingForFeet(distance) {

  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(1500));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(2501));

// Scuber ternary operator function
function ternaryCheckCity(city) {
  let isNYC = city === "NYC" ? "Ok, sounds good." : "No go.";
  return isNYC;
}

console.log(ternaryCheckCity("NYC"));
console.log(ternaryCheckCity("Pittsburgh"));

// Scuber switch function
function switchOnCharmFromTip(tip) {

  let isGoodTipper;

  switch (tip) {
    case 'generous':
      isGoodTipper = 'Thank you so much.'
      break;
    case 'not as generous':
      isGoodTipper = 'Thank you.'
      break;
    default:
      isGoodTipper = 'Bye.'
      break;
  }

  return isGoodTipper;
}

console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('thanks for everything'));