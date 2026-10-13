
import { CONTRACTOR_COUNT } from "./config.js";

import { generateCallSigns }
from "./ContractorData/ContractorCallSigns.js";

import { generateProfessions }
from "./ContractorData/ContractorProfessions.js";

import { generateEdges }
from "./ContractorData/ContractorEdges.js";

import { generatePortraits }
from "./ContractorData/ContractorImages.js";


const BASE_SKILLS = {
    trade: -1,
    drive: -1,
    instinct: -1,
    physique: -1,
    electronics: -1,

    willpower: -1,
    xenotech: -1,
    shadow: -1,
    survival: -1,
    voidcraft: -1,

    science: -1,
    engineering: -1,
    bureaucracy: -1,
    encyclopaedia: -1,
    medicare: -1,

    guns: -1,
    cqc: -1,
    explosives: -1,

    toughness: 1
};


export function generateContractors() {

    const contractors = [];

    const callsigns = generateCallSigns(CONTRACTOR_COUNT);
    const portraits = generatePortraits();
    const professions = generateProfessions(CONTRACTOR_COUNT);
    const edges = generateEdges(CONTRACTOR_COUNT);

    const statNames = [
        "operations",
        "adaptation",
        "expertise"
    ];

    for (let i = 0; i < CONTRACTOR_COUNT; i++) {

        const profession = professions[i];
        const edge = edges[i];

        const skills = structuredClone(BASE_SKILLS);

        // Profession and Edge provide skill bonuses.
        profession.skills.forEach(skill => {
            skills[skill] += 1;
        });

        edge.skills.forEach(skill => {
            skills[skill] += 1;
        });

        // Assign A, B, and C stat grades.
        const stats = {
            operations: 1,
            adaptation: 1,
            expertise: 1
        };

        const professionStat = profession.stat;
        let edgeStat = edge.stat;

        // Validate stat names to catch mistakes in the data files.
        if (!statNames.includes(professionStat)) {
            throw new Error(
                `Invalid profession stat "${professionStat}" for ${profession.name}`
            );
        }

        if (!statNames.includes(edgeStat)) {
            throw new Error(
                `Invalid Edge stat "${edgeStat}" for ${edge.name}`
            );
        }

        // Profession receives A.
        stats[professionStat] = 3;

        // If Profession and Edge share a stat, move Edge to the next stat.
        if (edgeStat === professionStat) {
            const index = statNames.indexOf(professionStat);
            edgeStat = statNames[(index + 1) % statNames.length];
        }

        // Edge receives B.
        stats[edgeStat] = 2;

        contractors.push({
            id: i + 1,

            callsign: callsigns[i],

            profession: profession.name,
            bio: profession.description,

            edge: edge.name,
            edgeDescription: edge.description,

            portrait: portraits[i],

            stats,
            skills
        });
    }

    return contractors;
}
