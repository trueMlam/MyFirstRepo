const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
const spacePerPlant = 0.8;
let plants = 20;

const maxPlants = Math.floor(area / spacePerPlant);

function predictGrowth(weeks) {
    let plantCount = plants * Math.pow(2, weeks);
    let capacityPercentage = (plantCount / maxPlants) * 100;

    console.log(`After ${weeks} weeks:`);
    console.log(`Plants: ${plantCount}, Capacity: ${capacityPercentage.toFixed(2)}%`);

    if (capacityPercentage > 80) {
        console.log("Prune the plants.");
    } else if (capacityPercentage > 50) {
        console.log("Monitor the growth.");
    } else {
        console.log("Plant more plants.");
    }
}

predictGrowth(1);
predictGrowth(2);
predictGrowth(3);

function simulateGrowthWithErrorHandling(startPlants, weeks) {
    try {
        let plantCount = startPlants * Math.pow(2, weeks);
        let requiredSpace = plantCount * spacePerPlant;

        if (requiredSpace > area) {
            throw new Error("Not enough space for the plants!");
        }

        console.log(`After ${weeks} weeks with ${startPlants} plants:`);
        console.log(`Plants: ${plantCount}, Required space: ${requiredSpace.toFixed(2)} m²`);
    } catch (error) {
        console.error(error.message);
    }
}

simulateGrowthWithErrorHandling(100, 10);

function calculateNewRadius(plants, weeks) {
    let plantCount = plants * Math.pow(2, weeks);
    let requiredSpace = plantCount * spacePerPlant;
    let newRadius = Math.sqrt(requiredSpace / PI);
    console.log(`New radius for ${plantCount} plants: ${newRadius.toFixed(2)} meters`);
}

calculateNewRadius(100, 10);