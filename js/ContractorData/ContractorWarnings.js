export const WARNINGS = [

{
    name: "SADIST",
    description: "Displays a disturbing enthusiasm for violence and close-quarters combat.",
    skills: ["cqc", "guns"],
    stat: "force"
},

{
    name: "DESIGNER DNA",
    description: "Genetically engineered for physical performance beyond baseline human limits.",
    skills: ["endurance", "physique"],
    stat: "force"
},

{
    name: "SHIPJACKER",
    description: "Has a history of illegally seizing spacecraft and cargo vessels.",
    skills: ["voidcraft", "electronics"],
    stat: "operations"
},

{
    name: "INTEGRATED INTELLIGENCE",
    description: "Shares cognitive processes with an implanted artificial intelligence.",
    skills: ["encyclopedia", "instinct"],
    stat: "expertise"
},

{
    name: "VOID SOUL",
    description: "Something about the emptiness between stars feels strangely familiar.",
    skills: ["instinct", "endurance"],
    stat: "adaptation"
},

{
    name: "FREAK",
    description: "Carries visible mutations or abnormalities acquired through unknown causes.",
    skills: ["endurance"],
    stat: "force"
},

{
    name: "NOBLE LINEAGE",
    description: "Descended from influential families with access to education and privilege.",
    skills: ["encyclopedia", "bureaucracy"],
    stat: "expertise"
},

{
    name: "FIEND",
    description: "Possesses unhealthy appetites and disturbing personal habits.",
    skills: ["shadow", "medicare"],
    stat: "adaptation"
},

{
    name: "DEATH PROOF",
    description: "Has survived situations that should have been unquestionably fatal.",
    skills: ["instinct", "drive"],
    stat: "operations"
},

{
    name: "NECROMANCER",
    description: "The dead seem oddly indifferent to your presence.",
    skills: ["survival", "willpower"],
    stat: "adaptation"
},

{
    name: "GHOST",
    description: "Moves quietly, leaves little trace, and is difficult to remember.",
    skills: ["endurance", "willpower"],
    stat: "adaptation"
},

{
    name: "STAR CHILD",
    description: "Exposure to the void has altered your perception of reality.",
    skills: ["voidcraft", "strom"],
    stat: "adaptation"
},

{
    name: "PARASITE",
    description: "Something foreign lives within you, though its intentions remain unclear.",
    skills: ["xenotech", "endurance"],
    stat: "force"
},

{
    name: "SORCERER",
    description: "Capable of manipulating STROM phenomena in ways others cannot.",
    skills: ["strom", "xenotech"],
    stat: "expertise"
},

{
    name: "PENAL CONSCRIPT",
    description: "Service is mandatory and offered in place of a harsher sentence.",
    skills: ["shadow", "physique"],
    stat: "force"
},

{
    name: "LUDDITE",
    description: "Distrusts advanced technology and prefers simpler solutions.",
    skills: ["endurance", "physique"],
    stat: "force"
},

{
    name: "CULTIST",
    description: "Maintains loyalty to an obscure sect or forbidden belief system.",
    skills: ["strom", "shadow"],
    stat: "operations"
},

{
    name: "DOOM SAYER",
    description: "Constantly predicts catastrophe and often appears to be correct.",
    skills: ["strom", "willpower"],
    stat: "adaptation"
},

{
    name: "ASSET",
    description: "Maintains connections to powerful individuals or organizations.",
    skills: ["shadow", "bureaucracy"],
    stat: "operations"
},

{
    name: "STROM TUNED",
    description: "Possesses an unusual sensitivity to STROM activity.",
    skills: ["strom", "instinct"],
    stat: "adaptation"
},

{
    name: "SOFTWARE PIRATE",
    description: "Specializes in illegal software acquisition and digital intrusion.",
    skills: ["shadow", "electronics"],
    stat: "expertise"
},

{
    name: "MUTINEER",
    description: "Has participated in at least one uprising against legitimate authority.",
    skills: ["cqc", "voidcraft"],
    stat: "force"
},

{
    name: "ZEALOT",
    description: "Driven by absolute conviction and unwavering belief.",
    skills: ["willpower", "instinct"],
    stat: "adaptation"
},

{
    name: "PYROMANIAC",
    description: "Displays an unhealthy fascination with fire and destruction.",
    skills: ["bigguns", "explosives"],
    stat: "force"
},

{
    name: "WAR CRIMINAL",
    description: "Accused or convicted of severe violations during military operations.",
    skills: ["explosives", "science"],
    stat: "expertise"
},

{
    name: "HUMAN EXPERIMENTATION",
    description: "Has participated in ethically questionable medical research.",
    skills: ["science", "medicare"],
    stat: "expertise"
},

{
    name: "GUN NUT",
    description: "Obsessively collects, maintains, and discusses firearms.",
    skills: ["guns", "bigguns"],
    stat: "operations"
},

{
    name: "CANNIBAL",
    description: "Has acquired dietary habits considered unacceptable by most societies.",
    skills: ["survival", "willpower"],
    stat: "adaptation"
},

{
    name: "COUNTERFEITER",
    description: "Experienced in the production of fraudulent documents and currency.",
    skills: ["bureaucracy", "encyclopedia"],
    stat: "expertise"
},

{
    name: "ORGAN HARVESTER",
    description: "Profits from the acquisition and sale of biological material.",
    skills: ["medicare", "science"],
    stat: "expertise"
},

{
    name: "BLOOD SPORT STAR",
    description: "Former celebrity participant in violent competitive entertainment.",
    skills: ["cqc", "medicare"],
    stat: "operations"
},

{
    name: "HACKER",
    description: "Specialist in unauthorized access to digital systems.",
    skills: ["electronics", "bureaucracy"],
    stat: "expertise"
},

{
    name: "TERRORIST",
    description: "Has employed violence against civilian or political targets.",
    skills: ["explosives", "engineering"],
    stat: "operations"
},

{
    name: "GRAND THEFT AUTO",
    description: "Has extensive experience acquiring vehicles without permission.",
    skills: ["engineering", "drive"],
    stat: "operations"
},

{
    name: "EXCESSIVE FORCE",
    description: "Frequently exceeds authorized levels of violence during operations.",
    skills: ["engineering", "bigguns"],
    stat: "force"
},

{
    name: "TROPHY HUNTER",
    description: "Tracks dangerous prey and collects evidence of successful kills.",
    skills: ["xenotech", "survival"],
    stat: "operations"
}

];

export const FREAKS = [

{
    name: "STUNTED",
    skill: "shadow",
    description: "Subject displays severe growth abnormalities."
},

{
    name: "TEETH",
    skill: "cqc",
    description: "Subject possesses abnormal dentition."
},

{
    name: "THIRD EYE",
    skill: "strom",
    description: "Subject possesses an additional sensory organ."
},

{
    name: "HORNS",
    skill: "cqc",
    description: "Subject displays cranial bone protrusions."
},

{
    name: "GIANT",
    skill: "physique",
    description: "Subject displays abnormal size and mass."
}

];

import { random } from "../utils.js";

export function generateWarnings(count) {

    const warnings = [];

    for(let i = 0; i < count; i++) {

        const warning = structuredClone(
            random(WARNINGS)
        );
// Freak sub table, its a mess but it works
        if(warning.name === "FREAK") {

            const mutation = random(FREAKS);

            warning.name =
                `FREAK (${mutation.name})`;

            warning.skills.push(
                mutation.skill
            );

            warning.description +=
                ` ${mutation.description}`;
        }

        warnings.push(warning);
    }

    return warnings;
}
