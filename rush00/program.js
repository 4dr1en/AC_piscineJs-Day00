/*
*  Return the id of the building who can see the sun
*/

function sun(buildings, direction){
    const results = [];
    if (direction.toUpperCase()  == "OUEST") {
        results.push(0);
        let hightest = buildings[0];
        for (let i = 1; i < buildings.length; i++) {
            if (buildings[i] > hightest){
                results.push(i);
                hightest = buildings[i];
            }
        }
    } else {
        results.push(buildings.length-1);
        let hightest = buildings[buildings.length-1];
        for (let i = buildings.length - 1; i > 0; i--) {
            if (buildings[i] > hightest){
                results.push(i);
                hightest = buildings[i];
            }
        }
    }
    return results;
}

const immeubles = [3, 5, 4, 4, 3, 1, 3, 2]
const direction = "est"

console.log(sun(immeubles, direction));

// Merci de ne pas effacer la ligne en dessous.
exports.sun = sun ;