const Prefix = [
    "IRON",
    "BLACK",
    "BURNING",
    "VOID",
    "STATIC",
    "STROM",
    "RED",
    "CROW",
    "BONE",
    "STEEL",
    "GHOST",
    "SCUM",
    "BIG",
    "BUG",
    "BLOOD",
    "RUST",
    "BROKEN",
    "COLD",
    "WILD",
    "SILENT",
    "DEAD",
    "DARK",
    "WHITE",
    "NIGHT",
    "STRANGE",
    "BILLY",
    "LONE",
    "HOLLOW",
    "DEEP",
    "FROST",
    "STORM",
    "THUNDER",
    "SHADOW",
    "CRIMSON",
    "GOLDEN",
    "BLEAK",
    "SAVAGE",
    "TOXIC",
    "NOVA",
    "EMBER",
    "GLASS",
    "COPPER",
    "LUNA",
    "RAD",
    "ROGUE",
    "VULTURE",
    "MARS",
    "CINDER",
    "WAR",
    "LAST"
];

const Suffix = [
    "ONE",
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
    "TEN",
    "ELEVEN",
    "TWELVE",
    "FOX",
    "CROW",
    "GHOST",
    "SPIDER",
    "SCORPION",
    "SERPENT",
    "BEAR",
    "GEARS",
    "DOG",
    "MERCURY",
    "SHARK",
    "VULTURE",
    "JACK",
    "PHANTOM",
    "BANSHEE",
    "SAINT",
    "SPECTRE",
    "MANTIS",
    "HORNET",
    "WIDOW",
    "WOLF",
    "KING",
    "EXECUTIONER",
    "PILGRIM",
    "PROPHET",
    "QUEEN",
    "KNIGHT",
    "RAIDER",
    "HUNTER",
    "STALKER",
    "OCTOPUS",
    "MARAUDER",
    "GUARDIAN",
    "HAWK",
    "TYRANT",
    "SHEPHERD",
    "WARLOCK",
    "SOLDIER"
];

function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export function generateCallSigns(count = 12) {

    const callsigns = new Set();

    while (callsigns.size < count) {

        const name = `${random(Prefix)} ${random(Suffix)}`;

        callsigns.add(name);
    }

    return [...callsigns];
}
