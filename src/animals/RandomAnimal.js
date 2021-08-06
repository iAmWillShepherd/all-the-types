'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var AnimalGroup;
(function (AnimalGroup) {
    AnimalGroup["Mammal"] = "mammal";
    AnimalGroup["Bird"] = "bird";
    AnimalGroup["Fish"] = "fish";
    AnimalGroup["Reptile"] = "reptile";
})(AnimalGroup || (AnimalGroup = {}));

var BirdSpecies;
(function (BirdSpecies) {
    BirdSpecies["Ostrich"] = "ostrich";
    BirdSpecies["Penguin"] = "penguin";
    BirdSpecies["Owl"] = "owl";
    BirdSpecies["Duck"] = "duck";
})(BirdSpecies || (BirdSpecies = {}));

var FishSpecies;
(function (FishSpecies) {
    FishSpecies["Goldfish"] = "goldfish";
    FishSpecies["Salmon"] = "salmon";
    FishSpecies["Shark"] = "shark";
    FishSpecies["Bass"] = "bass";
})(FishSpecies || (FishSpecies = {}));

var MammalSpecies;
(function (MammalSpecies) {
    MammalSpecies["Human"] = "human";
    MammalSpecies["Horse"] = "horse";
    MammalSpecies["Dolphin"] = "dolphin";
    MammalSpecies["Chimpanzee"] = "chimpanzee";
})(MammalSpecies || (MammalSpecies = {}));
var MammalLocomotion;
(function (MammalLocomotion) {
    MammalLocomotion["Terrestrial"] = "terrestrial";
    MammalLocomotion["Aquatic"] = "aquatic";
    MammalLocomotion["Unknown"] = "unknown";
})(MammalLocomotion || (MammalLocomotion = {}));

var ReptileSpecies;
(function (ReptileSpecies) {
    ReptileSpecies["Crocodile"] = "crocodile";
    ReptileSpecies["Tortoise"] = "tortoise";
    ReptileSpecies["Cobra"] = "cobra";
    ReptileSpecies["Gecko"] = "gecko";
})(ReptileSpecies || (ReptileSpecies = {}));

var UNKNOWN = "unknown";
var Mammal = /** @class */ (function () {
    function Mammal(species) {
        this.species = species;
        this.group = AnimalGroup.Mammal;
        switch (species) {
            case MammalSpecies.Chimpanzee:
                this.color = "brown";
                this.locomotion = MammalLocomotion.Terrestrial;
                break;
            case MammalSpecies.Human:
            case MammalSpecies.Horse:
                this.color = this.getRandomColor();
                this.locomotion = MammalLocomotion.Terrestrial;
                break;
            case MammalSpecies.Dolphin:
                this.locomotion = MammalLocomotion.Aquatic;
                this.color = "grey";
                break;
            default:
                this.locomotion = MammalLocomotion.Unknown;
                this.color = UNKNOWN;
                break;
        }
    }
    Mammal.prototype.getRandomColor = function () {
        var colors = ["white", "black", "tan", "light brown"];
        return colors[Math.floor(Math.random() * colors.length)];
    };
    return Mammal;
}());
var Bird = /** @class */ (function () {
    function Bird(species) {
        this.species = species;
        this.group = AnimalGroup.Bird;
        switch (species) {
            case BirdSpecies.Duck:
                this.color = this.getRandomColor();
                this.wingspan = this.getRandomWingspan();
                this.aquatic = true;
                this.flying = true;
                break;
            case BirdSpecies.Ostrich:
                this.color = this.getRandomColor();
                this.aquatic = false;
                this.flying = false;
                break;
            case BirdSpecies.Owl:
                this.color = this.getRandomColor();
                this.wingspan = this.getRandomWingspan();
                this.aquatic = false;
                this.flying = true;
                break;
            case BirdSpecies.Penguin:
                this.color = "black";
                this.aquatic = true;
                this.flying = false;
                break;
            default:
                this.color = UNKNOWN;
        }
    }
    Bird.prototype.getRandomColor = function () {
        var colors = ["white", "black", "tan", "light brown"];
        return colors[Math.floor(Math.random() * colors.length)];
    };
    Bird.prototype.getRandomWingspan = function () {
        return Math.min(20, Math.floor(Math.random() * 40));
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(species) {
        this.species = species;
        this.group = AnimalGroup.Fish;
        switch (species) {
            case FishSpecies.Bass:
                this.waterType = this.getRandomWaterType();
                this.size = this.getRandomSize(8, 96);
                this.color = this.getRandomColor();
                break;
            case FishSpecies.Goldfish:
                this.waterType = "fresh";
                this.size = this.getRandomSize(1, 4);
                this.color = "gold";
                break;
            case FishSpecies.Salmon:
                this.waterType = this.getRandomWaterType();
                this.size = this.getRandomSize(30, 58);
                this.color = "pink";
                break;
            case FishSpecies.Shark:
                this.waterType = "salt";
                this.size = this.getRandomSize(48, 492);
                this.color = Math.floor(Math.random() * 2) ? "grey" : "blue";
                break;
            default:
                this.color = this.getRandomColor();
                this.size = this.getRandomSize(3, 120);
                this.waterType = this.getRandomWaterType();
                break;
        }
    }
    Fish.prototype.getRandomSize = function (minSize, maxSize) {
        return Math.max(minSize, Math.floor(Math.random() * maxSize));
    };
    Fish.prototype.getRandomWaterType = function () {
        var rand = Math.floor(Math.random() * 2);
        return rand ? "salt" : "fresh";
    };
    Fish.prototype.getRandomColor = function () {
        var colors = ["white", "black", "tan", "light brown", "silver", "green", "rainbow"];
        return colors[Math.floor(Math.random() * colors.length)];
    };
    return Fish;
}());
var Reptile = /** @class */ (function () {
    function Reptile(species) {
        this.species = species;
        this.group = AnimalGroup.Reptile;
        switch (species) {
            case ReptileSpecies.Cobra:
                this.color = this.getRandomColor();
                this.fangs = true;
                break;
            case ReptileSpecies.Crocodile:
                this.color = "green";
                this.teeth = true;
                this.legs = true;
                break;
            case ReptileSpecies.Gecko:
                this.color = this.getRandomColor();
                this.teeth = true;
                this.legs = true;
                break;
            case ReptileSpecies.Tortoise:
                this.color = Math.floor(Math.random() * 2) ? "brown" : "green";
                this.teeth = true;
                this.legs = true;
                break;
            default:
                this.color = this.getRandomColor();
                break;
        }
    }
    Reptile.prototype.getRandomColor = function () {
        var colors = ["white", "black", "tan", "light brown", "green", "red", "yellow", "orange"];
        return colors[Math.floor(Math.random() * colors.length)];
    };
    return Reptile;
}());

function getRandomEnum(enumName, maxValue) {
    return Object.values(enumName)[Math.floor(Math.random() * maxValue)];
}
var RandomAnimal = /** @class */ (function () {
    function RandomAnimal() {
    }
    RandomAnimal.get = function () {
        var randomAnimalGroup = getRandomEnum(AnimalGroup, 4);
        switch (randomAnimalGroup) {
            case AnimalGroup.Mammal:
                return new Mammal(getRandomEnum(MammalSpecies, 4));
            case AnimalGroup.Bird:
                return new Bird(getRandomEnum(BirdSpecies, 4));
            case AnimalGroup.Fish:
                return new Fish(getRandomEnum(FishSpecies, 4));
            case AnimalGroup.Reptile:
                return new Reptile(getRandomEnum(ReptileSpecies, 4));
            default:
                console.log("different species:", randomAnimalGroup);
                break;
        }
    };
    return RandomAnimal;
}());

exports.RandomAnimal = RandomAnimal;
