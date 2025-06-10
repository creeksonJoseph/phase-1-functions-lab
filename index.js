function distanceFromHqInBlocks(street) {
  const hqstreet = 42;
  return Math.abs(street - hqstreet);
}
function distanceFromHqInFeet(street) {
  const feetPerBlock = 264;
  return distanceFromHqInBlocks(street) * feetPerBlock;
}
function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  return Math.abs(destination - start) * feetPerBlock;
}
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
