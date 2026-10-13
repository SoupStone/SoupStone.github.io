// descriptions to be updated, currently ai junk

export const PROFESSIONS = [

{
    name: "PILOT",
    description: "Military spacecraft operator trained to move crews and cargo through hazardous routes and contested space.",
    skills: ["drive", "instinct", "voidcraft", "electronics"],
    stat: "operations"
},

{
    name: "MEDIC",
    description: "Field medical specialist trained to stabilize casualties and keep contractors alive under fire.",
    skills: ["medicare", "physique", "guns", "science"],
    stat: "expertise"
},

{
    name: "GRUNT",
    description: "General-purpose combat contractor accustomed to security patrols, boarding actions, and prolonged engagements.",
    skills: ["guns", "physique", "survival", "willpower"],
    stat: "operations"
},

{
    name: "COURIER",
    description: "Independent transport specialist trusted to deliver sensitive cargo, personnel, and information when communications cannot be relied upon.",
    skills: ["survival", "drive", "voidcraft", "instinct"],
    stat: "adaptation"
},

{
    name: "PATHFINDER",
    description: "Frontier guide experienced in scouting routes, assessing terrain, and leading teams through unfamiliar environments.",
    skills: ["instinct", "shadow", "survival", "willpower"],
    stat: "adaptation"
},

{
    name: "SCAVENGER",
    description: "Salvage worker who recovers valuable equipment, strips abandoned installations, and knows what can be reused or sold.",
    skills: ["engineering", "xenotech", "shadow", "trade"],
    stat: "adaptation"
},

{
    name: "XENOLOGIST",
    description: "Research specialist who studies alien artefacts, extinct civilizations, and technologies humanity barely understands.",
    skills: ["xenotech", "science", "encyclopaedia", "medicare"],
    stat: "expertise"
},

{
    name: "MECHANIC",
    description: "Industrial technician responsible for keeping vehicles, machinery, and spacecraft systems operational in the field.",
    skills: ["engineering", "physique", "voidcraft", "electronics"],
    stat: "expertise"
},

{
    name: "KNIGHT",
    description: "Armoured corporate retainer trained to hold ground, breach defended positions, and serve as an instrument of authority.",
    skills: ["cqc", "physique", "willpower", "guns"],
    stat: "operations"
},

{
    name: "NAVIGATOR",
    description: "Specialist in route planning, stellar navigation, and the interpretation of sensor data across poorly charted space.",
    skills: ["voidcraft", "instinct", "electronics", "science"],
    stat: "operations"
},

{
    name: "RELIC HUNTER",
    description: "Independent explorer who searches abandoned settlements and ancient ruins for valuable artefacts and forgotten technology.",
    skills: ["xenotech", "survival", "willpower", "instinct"],
    stat: "adaptation"
},

{
    name: "QUARTERMASTER",
    description: "Logistics specialist responsible for inventory, procurement, equipment allocation, and keeping a contractor team supplied.",
    skills: ["trade", "bureaucracy", "guns", "engineering"],
    stat: "expertise"
},

{
    name: "SCOUT",
    description: "Reconnaissance operative trained to observe hostile forces, identify routes, and return without being detected.",
    skills: ["shadow", "survival", "guns", "instinct"],
    stat: "adaptation"
},

{
    name: "PREACHER",
    description: "Religious officer trained to provide guidance to isolated crews and settlements.",
    skills: ["encyclopaedia", "willpower", "bureaucracy", "medicare"],
    stat: "adaptation"
},

{
    name: "CONTAINMENT SPECIALIST",
    description: "Hazard-response contractor trained to isolate dangerous materials, secure contaminated sites, and prevent unknown threats from spreading.",
    skills: ["science", "engineering", "survival", "guns"],
    stat: "expertise"
},

{
    name: "PALADIN",
    description: "Elite enforcer from the church, trained protect high-value personnel.",
    skills: ["willpower", "cqc", "shadow", "guns"],
    stat: "operations"
},

{
    name: "SCRIBE",
    description: "Records specialist responsible for documentation, archival research, intelligence reports, and the preservation of institutional knowledge.",
    skills: ["encyclopaedia", "bureaucracy", "instinct", "science"],
    stat: "expertise"
},

{
    name: "DEMOLITIONIST",
    description: "Breaching and demolition expert who prepares charges, disables obstacles, and destroys structures or equipment on contract.",
    skills: ["explosives", "engineering", "physique", "survival"],
    stat: "operations"
},

{
    name: "DOCTOR",
    description: "Qualified physician trained in diagnosis, complex treatment, and the management of injuries and illness beyond battlefield care.",
    skills: ["medicare", "science", "encyclopaedia", "bureaucracy"],
    stat: "expertise"
},

{
    name: "ASTEROID MINER",
    description: "Extraction worker experienced in hazardous mining, industrial machinery, and the recovery of resources from airless bodies.",
    skills: ["voidcraft", "physique", "explosives", "engineering"],
    stat: "operations"
},

{
    name: "CHEMIST",
    description: "Laboratory specialist who develops and analyses industrial compounds, pharmaceuticals, propellants, and hazardous substances.",
    skills: ["science", "medicare", "engineering", "encyclopaedia"],
    stat: "expertise"
},

{
    name: "PHYSICIST",
    description: "Research specialist who studies advanced materials, propulsion phenomena, and the physical principles behind unfamiliar technologies.",
    skills: ["science", "voidcraft", "electronics", "encyclopaedia"],
    stat: "expertise"
},

{
    name: "SYS ADMIN",
    description: "Systems administrator responsible for maintaining corporate networks, access permissions, databases, and critical digital infrastructure.",
    skills: ["electronics", "bureaucracy", "instinct", "engineering"],
    stat: "expertise"
},

{
    name: "ROBOTICIST",
    description: "Engineer specialising in robotics, automated industrial systems, and the maintenance of autonomous machines.",
    skills: ["engineering", "electronics", "science", "xenotech"],
    stat: "expertise"
},

{
    name: "CYBER SECURITY",
    description: "Digital security specialist tasked with protecting corporate systems, identifying intrusions, and defeating hostile access attempts.",
    skills: ["electronics", "bureaucracy", "shadow", "instinct"],
    stat: "adaptation"
},

{
    name: "COOK",
    description: "Galley worker responsible for feeding crews, preserving supplies, and making limited provisions last in isolated facilities.",
    skills: ["survival", "trade", "physique", "instinct"],
    stat: "adaptation"
},

{
    name: "PORTER",
    description: "Heavy labourer hired to move equipment, haul supplies, and transport cargo through difficult or hazardous terrain.",
    skills: ["physique", "drive", "survival", "trade"],
    stat: "operations"
},

{
    name: "SCRAPPER",
    description: "Industrial salvager who dismantles damaged machinery, recovers usable components, and strips derelict equipment for parts.",
    skills: ["engineering", "voidcraft", "explosives", "trade"],
    stat: "operations"
},

{
    name: "SMUGGLER",
    description: "Illicit transporter who moves restricted goods through unofficial routes, evades inspections, and exploits gaps in corporate oversight.",
    skills: ["shadow", "drive", "voidcraft", "trade"],
    stat: "adaptation"
},

{
    name: "SIEGE BREAKER",
    description: "Heavy assault contractor specialising in forced entry, fortified positions, and the destruction of defensive infrastructure.",
    skills: ["guns", "physique", "explosives", "engineering"],
    stat: "operations"
},

{
    name: "TANKER",
    description: "Armoured vehicle crew member trained to operate combat vehicles, maintain their systems, and function under sustained fire.",
    skills: ["drive", "engineering", "guns", "electronics"],
    stat: "operations"
},

{
    name: "AGENT",
    description: "Corporate operative assigned to sensitive objectives involving infiltration, asset recovery, surveillance, and targeted violence.",
    skills: ["shadow", "guns", "cqc", "bureaucracy"],
    stat: "adaptation"
},

{
    name: "COMPANY COP",
    description: "Corporate security officer responsible for enforcing company policy, investigating incidents, and protecting facilities and personnel.",
    skills: ["bureaucracy", "guns", "cqc", "instinct"],
    stat: "operations"
},

{
    name: "SPY",
    description: "Intelligence operative specialising in covert entry, information theft, surveillance, and the exploitation of corporate secrets.",
    skills: ["instinct", "cqc", "shadow", "electronics"],
    stat: "adaptation"
},

{
    name: "XENO-TECHNICIAN",
    description: "Technical specialist tasked with examining, maintaining, and safely handling devices recovered from non-human installations.",
    skills: ["xenotech", "electronics", "engineering", "science"],
    stat: "expertise"
},

{
    name: "SNIPER",
    description: "Long-range marksman trained to observe targets, select firing positions, and eliminate priority threats from concealment.",
    skills: ["guns", "shadow", "instinct", "survival"],
    stat: "adaptation"
}

];

import { random } from "../utils.js";

export function generateProfessions(count) {
    const professions = [];

    for (let i = 0; i < count; i++) {
        professions.push(random(PROFESSIONS));
    }

    return professions;
}
