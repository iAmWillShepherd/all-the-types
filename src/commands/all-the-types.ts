import { GluegunCommand } from 'gluegun'
import * as _ from 'lodash'
import { Animal, RandomAnimal } from '../animals/RandomAnimal';

const command: GluegunCommand = {
  name: 'all-the-types',
  run: async toolbox => {
    const { print } = toolbox
    console.log("Generating animals");

    let animals: Animal[] = [];
    for(let i=0; i<100; i++) {
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

    console.log('\n');
    console.log(allBirds.length, "total birds.")
    console.log(allMammals.length, "total mammals.")
    console.log(allFish.length, "total fish.")
    console.log(allReptiles.length, "total reptiles.")
    console.log('\n');

    const birdCages = _.chunk<any>(allBirds, 3);
    const mammalCages = _.chunk<any>(allMammals, 3);

    console.log(birdCages.length, "bird cages.")
    console.log(mammalCages.length, "mammal cages.")
    console.log('\n');

    // print all bird wingspans
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
    const largeBirds = _.filter(allBirds, (bird: any) => (bird.wingspan < 20 && bird.wingspan >= 10));

    console.log("small birds:", smallBirds);
    console.log("medium birds:", mediumBirds);
    console.log("large birds:", largeBirds);

    // print all animals of colors ___ (white, black, etc...)
    console.log(animals);
    const animalGroupsByColor = _.groupBy(animals, 'color');
    console.log("animals by color:", animalGroupsByColor);

    // print all animal species
  }
}

module.exports = command
