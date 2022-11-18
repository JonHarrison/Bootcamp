var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

console.log("constellations ", constellations);
constellations.unshift("Canis Major");
console.log("constellations ", constellations);
console.log("planets", planets);
planets.pop(); // remove last element which is Venus
console.log("planets", planets);
var galaxy = constellations.concat(planets);
console.log("galaxy", galaxy);
console.log("star " + star);
var ucStar = star.toUpperCase();
console.log("uppercase star " + ucStar);

