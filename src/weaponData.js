//Normally this would go into a db but that costs money so.....
const weaponData = [
    {
        name: 'Antimatter Rifle',
        numberOfDie: 6,
        dieRoll: Math.floor((Math.random() * 8) + 1)
    },
    {
        name: 'Battleaxe',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 8) + 1)
    },
    {
        name: 'Blowgun',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 1) + 1)    //It only does one piercing damage
    },
    {
        name: 'Boomerang',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 4) + 1)
    },
    {
        name: 'Club',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 4) + 1)
    },
    {
        name: 'Crossbow, Hand',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 6) + 1)
    },
    {
        name: 'Crossbow, Heavy',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 10) + 1)
    },
    {
        name: 'Crossbow, Light',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 8) + 1)
    },
    {
        name: 'Dagger',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 4) + 1)
    },
    {
        name: 'Dart',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 4) + 1)
    },
    {
        name: 'Double-Bladed Scimitar',
        numberOfDie: 2,
        dieRoll: Math.floor((Math.random() * 4) + 1)
    },
    {
        name: 'Flail',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 8) + 1)
    },
    {
        name: 'Glaive',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 10) + 1)
    },
    {
        name: 'GreatAxe',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 12) + 1)
    },
    {
        name: 'GreatClub',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 8) + 1)
    },
    {
        name: 'GreatSword',
        numberOfDie: 2,
        dieRoll: Math.floor((Math.random() * 6) + 1)
    },
    {
        name: 'Halberd',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 10) + 1)
    },
    {
        name: 'Handaxe',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 6) + 1)
    },
    {
        name: 'Javelin',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 6) + 1)
    },
    {
        name: 'Lance',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 12) + 1)
    },
    {
        name: 'Laser Pistol',
        numberOfDie: 3,
        dieRoll: Math.floor((Math.random() * 6) + 1)
    },
    {
        name: 'Laser Rifle',
        numberOfDie: 3,
        dieRoll: Math.floor((Math.random() * 8) + 1)
    },
    {
        name: 'Light Hammer',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 4) + 1)
    },
    {
        name: 'Longbow',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 8) + 1)
    },
    {
        name: 'Longsword',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 8) + 1)
    },
    {
        name: 'Mace',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 6) + 1)
    },
    {
        name: 'Maul',
        numberOfDie: 2,
        dieRoll: Math.floor((Math.random() * 6) + 1)
    },
    {
        name: 'Morningstar',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 8) + 1)
    },
    {
        name: 'Musket',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 12) + 1)
    },
    {
        name: 'Net',
        numberOfDie: 0, //This thing does 0 damage so this will make sure it's always 0
        dieRoll: Math.floor((Math.random() * 12) + 1)
    },
    {
        name: 'Pike',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 10) + 1)
    },
    {
        name: 'Pistol',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 10) + 1)
    },
    {
        name: 'Pistol, Automatic',
        numberOfDie: 2,
        dieRoll: Math.floor((Math.random() * 6) + 1)
    },
    {
        name: 'Quarterstaff',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 6) + 1)
    },
    {
        name: 'Rapier',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 8) + 1)
    },
    {
        name: 'Revolver',
        numberOfDie: 2,
        dieRoll: Math.floor((Math.random() * 8) + 1)
    },
    {
        name: 'Rifle, Automatic',
        numberOfDie: 2,
        dieRoll: Math.floor((Math.random() * 8) + 1)
    },
    {
        name: 'Rifle, Hunting',
        numberOfDie: 2,
        dieRoll: Math.floor((Math.random() * 10) + 1)
    },
    {
        name: 'Scimitar',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 6) + 1)
    },
    {
        name: 'Shortbow',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 6) + 1)
    },
    {
        name: 'Shortsword',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 6) + 1)
    },
    {
        name: 'Shotgun',
        numberOfDie: 2,
        dieRoll: Math.floor((Math.random() * 8) + 1)
    },
    {
        name: 'Sickle',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 4) + 1)
    },
    {
        name: 'Sling',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 4) + 1)
    },
    {
        name: 'Spear',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 6) + 1)
    },
    {
        name: 'Trident',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 6) + 1)
    },
    {
        name: 'War Pick',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 8) + 1)
    },
    {
        name: 'War Hammer',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 8) + 1)
    },
    {
        name: 'Whip',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 4) + 1)
    },
    {
        name: 'Whip',
        numberOfDie: 1,
        dieRoll: Math.floor((Math.random() * 8) + 1)
    },
];

export default weaponData;