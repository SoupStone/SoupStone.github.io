// descriptions to be updated, currently ai junk
export const PROFESSIONS = [

{
    name: "PILOT",
    description: "Certified spacecraft operator trained to navigate hostile environments and unstable transit routes.",
    skills: ["drive", "instinct", "voidcraft"],
    stat: "operations"
},

{
    name: "MEDIC",
    description: "Combat medical specialist responsible for trauma treatment and emergency field surgery.",
    skills: ["medicare", "physique", "guns"],
    stat: "operations"
},

{
    name: "GRUNT",
    description: "Frontline infantry contractor accustomed to prolonged combat operations.",
    skills: ["guns", "endurance", "physique"],
    stat: "force"
},

{
    name: "COURIER",
    description: "Reliable transport specialist trusted to move personnel, cargo, and sensitive information.",
    skills: ["survival", "drive", "voidcraft"],
    stat: "operations"
},

{
    name: "PATHFINDER",
    description: "Explorer and guide trained to locate safe routes through dangerous territory.",
    skills: ["instinct", "shadow", "survival"],
    stat: "adaptation"
},

{
    name: "SCAVENGER",
    description: "Resourceful salvager skilled at recovering useful equipment from abandoned sites.",
    skills: ["engineering", "xenotech", "shadow"],
    stat: "adaptation"
},

{
    name: "XENOLOGIST",
    description: "Research specialist dedicated to the study of alien life and forgotten civilizations.",
    skills: ["xenotech", "science", "strom"],
    stat: "expertise"
},

{
    name: "MECHANIC",
    description: "Technical engineer capable of maintaining vehicles, machinery, and spacecraft systems.",
    skills: ["engineering", "physique", "voidcraft"],
    stat: "force"
},

{
    name: "KNIGHT",
    description: "Heavily armed combatant trained for direct assaults and defensive operations.",
    skills: ["cqc", "physique", "endurance"],
    stat: "force"
},

{
    name: "NAVIGATOR",
    description: "Specialist in stellar cartography, route planning, and anomalous transit prediction.",
    skills: ["voidcraft", "instinct", "strom"],
    stat: "operations"
},

{
    name: "ARCHAEOLOGIST",
    description: "Explorer of ancient ruins and lost worlds, often working beyond the frontier.",
    skills: ["xenotech", "survival", "bureaucracy"],
    stat: "adaptation"
},

{
    name: "QUARTERMASTER",
    description: "Logistics expert responsible for equipment allocation and supply management.",
    skills: ["guns", "bigguns", "physique"],
    stat: "expertise"
},

{
    name: "SCOUT",
    description: "Reconnaissance specialist trained to observe hostile forces without detection.",
    skills: ["shadow", "survival", "guns"],
    stat: "adaptation"
},

{
    name: "PREACHER",
    description: "Religious advisor tasked with preserving morale and spiritual discipline.",
    skills: ["encyclopedia", "willpower", "medicare"],
    stat: "adaptation"
},

{
    name: "EXORCIST",
    description: "Specialist trained to identify and neutralize STROM-related corruption.",
    skills: ["encyclopedia", "guns", "willpower"],
    stat: "adaptation"
},

{
    name: "PALADIN",
    description: "Elite warrior sworn to confront the horrors that emerge from beyond the Gate.",
    skills: ["willpower", "cqc", "bigguns"],
    stat: "force"
},

{
    name: "SCRIBE",
    description: "Archivist and administrator responsible for records, reports, and intelligence.",
    skills: ["encyclopedia", "bureaucracy", "instinct"],
    stat: "expertise"
},

{
    name: "DEMOLITIONIST",
    description: "Explosives expert trained in breaching, sabotage, and controlled destruction.",
    skills: ["explosives", "endurance", "bigguns"],
    stat: "force"
},

{
    name: "DOCTOR",
    description: "Highly educated physician capable of advanced diagnosis and treatment.",
    skills: ["medicare", "encyclopedia", "bureaucracy"],
    stat: "expertise"
},

{
    name: "ASTEROID MINER",
    description: "Industrial worker experienced in hazardous extraction operations.",
    skills: ["voidcraft", "bigguns", "physique"],
    stat: "force"
},

{
    name: "CHEMIST",
    description: "Scientific specialist focused on compounds, medicines, and volatile substances.",
    skills: ["medicare", "science", "explosives"],
    stat: "expertise"
},

{
    name: "PHYSICIST",
    description: "Research scientist dedicated to understanding the laws governing reality.",
    skills: ["science", "voidcraft", "electronics"],
    stat: "expertise"
},

{
    name: "SYS ADMIN",
    description: "Technical overseer responsible for maintaining critical digital infrastructure.",
    skills: ["electronics", "bureaucracy", "instinct"],
    stat: "expertise"
},

{
    name: "ROBOTICIST",
    description: "Engineer specializing in autonomous systems and machine intelligence.",
    skills: ["engineering", "electronics", "voidcraft"],
    stat: "expertise"
},

{
    name: "CYBER SECURITY",
    description: "Network defense specialist trained to combat intrusion and hostile code.",
    skills: ["electronics", "strom", "guns"],
    stat: "expertise"
},

{
    name: "COOK",
    description: "Support specialist responsible for sustaining personnel in hostile environments.",
    skills: ["survival", "endurance", "shadow"],
    stat: "adaptation"
},

{
    name: "PORTER",
    description: "Heavy labour specialist accustomed to transporting equipment across difficult terrain.",
    skills: ["endurance", "physique", "instinct"],
    stat: "force"
},

{
    name: "SCRAPPER",
    description: "Industrial salvager skilled at dismantling and repurposing damaged technology.",
    skills: ["voidcraft", "engineering", "explosives"],
    stat: "operations"
},

{
    name: "SMUGGLER",
    description: "Experienced transporter with extensive knowledge of unofficial trade routes.",
    skills: ["shadow", "drive", "voidcraft"],
    stat: "operations"
},

{
    name: "SIEGE BREAKER",
    description: "Heavy assault specialist trained to destroy fortifications and entrenched positions.",
    skills: ["bigguns", "guns", "physique"],
    stat: "force"
},

{
    name: "TANKER",
    description: "Armoured vehicle operator accustomed to combat in mechanized formations.",
    skills: ["bigguns", "drive", "engineering"],
    stat: "force"
},

{
    name: "AGENT",
    description: "Corporate operative trained to accomplish objectives through discretion and force.",
    skills: ["shadow", "guns", "cqc"],
    stat: "operations"
},

{
    name: "COMPANY COP",
    description: "Security officer tasked with protecting corporate interests and personnel.",
    skills: ["bureaucracy", "guns", "cqc"],
    stat: "operations"
},

{
    name: "SPY",
    description: "Intelligence operative trained in infiltration, surveillance, and information theft.",
    skills: ["instinct", "cqc", "shadow"],
    stat: "operations"
},

{
    name: "XENO-TECHNICIAN",
    description: "Specialist responsible for maintaining and studying alien technology.",
    skills: ["xenotech", "electronics", "engineering"],
    stat: "adaptation"
},

{
    name: "SNIPER",
    description: "Long-range marksman trained to eliminate priority targets with precision.",
    skills: ["bigguns", "shadow", "instinct"],
    stat: "adaptation"
}

];

import { random } from "../utils.js";
export function generateProfessions(count) {

    const professions = [];

    for(let i = 0; i < count; i++) {
        professions.push(random(PROFESSIONS));
    }

    return professions;
}
