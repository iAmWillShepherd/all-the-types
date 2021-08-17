import { GluegunCommand } from 'gluegun'
import * as _ from 'lodash'
import { Animal, RandomAnimal } from 'tsconf-animals';

const command: GluegunCommand = {
  name: 'all-the-types',
  run: async toolbox => {
    const { print } = toolbox
    console.log("Generating animals");

    let animals: Animal[] = [];
    for(let i = 0; i < 20; i++) {
      animals.push(RandomAnimal.get());
    }

    print.info('Welcome to your CLI')
    console.log("\nYou have:");

    // totals
    const allBirds = animals.filter((animal: Animal): animal is any => {
      if (animal.group === "bird") {
        return true;
      }
    });

    const allMammals = animals.filter((animal: Animal): animal is any => {
      if (animal.group === "mammal") {
        return true;
      }
    });

    const allFish = animals.filter((animal: Animal): animal is any => {
      if (animal.group === "fish") {
        return true;
      }
    })

    const allReptiles = animals.filter((animal: Animal): animal is any => {
      if (animal.group === "reptile") {
        return true;
      }
    })

    console.log('\n\n');
    console.log(allBirds.length, "total birds.")
    console.log(allMammals.length, "total mammals.")
    console.log(allFish.length, "total fish.")
    console.log(allReptiles.length, "total reptiles.")

    const birdCages = _.chunk<any>(allBirds, 3);

    console.log('\n\n');
    console.log(birdCages.length, "bird cages.")

    // print all bird wingspans
    console.log('\n\n');
    const birdsWithWingspans = _.partition(allBirds, (bird: any) => (bird.wingspan !== undefined));
    const wingspans = _.map(birdsWithWingspans[0], (bird: any) => bird.wingspan);
    console.log("wingspans:", wingspans);

    // print unique wingspans
    const uniqueWingspans = _.uniq(wingspans);
    console.log("unique wingspans:", uniqueWingspans);

    // sorted unique wingspans
    const sortedUniqueWingspans = _.sortBy(uniqueWingspans);
    console.log("sorted unique wingspans:", sortedUniqueWingspans);

    // classify birds by size
    const smallBirds = _.filter(allBirds, (bird: any) => (bird.wingspan < 5));
    const mediumBirds = _.filter(allBirds, (bird: any) => (bird.wingspan < 10 && bird.wingspan >= 5));
    const largeBirds = _.filter(allBirds, (bird: any) => (bird.wingspan <= 20 && bird.wingspan >= 10));

    console.log('\n\n');
    console.log("small birds:", smallBirds);
    console.log("medium birds:", mediumBirds);
    console.log("large birds:", largeBirds);

    // print all animals of colors ___ (white, black, etc...)
    console.log('\n\n');
    const animalGroupsByColor = _.groupBy(animals, 'color');
    console.log("animals by color:", animalGroupsByColor);

    // partition mammals by locomotion
    const mammalsPartitionedByLocomotion = _.partition(allMammals, (mammal: any) => (mammal.locomotion === 'terrestrial'));
    console.log('\n\n');
    const terrestrialMammals = mammalsPartitionedByLocomotion[0];
    const aquaticMammals = mammalsPartitionedByLocomotion[1];
    console.log("terrestrial mammals:", terrestrialMammals);
    console.log("aquatic mammals:", aquaticMammals);

    // get reptiles with legs
    console.log('\n\n');
    const reptilesWithLegs = _.filter(allReptiles, (reptile: any) => (reptile.legs));
    console.log("reptiles with legs:", reptilesWithLegs);

    // get first reptile with legs
    const firstReptileWithLegs = _.take(reptilesWithLegs);
    console.log("first reptile with legs:", firstReptileWithLegs);

    /* COMPLETE THE REST OF THESE TASKS */

    // organize all the reptiles with legs by color

    // separate the fish by water type

    // create three size categories for the fish

    // get all the reptiles with fangs

    // separate the birds by ability to fly

    // separate the birds by ability to swim

    // get the first two reptiles with teeth

  }
}

module.exports = command
