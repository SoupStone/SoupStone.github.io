import { CONTRACTOR_COUNT } from "./config.js";

import { generateCallSigns }
from "./ContractorData/ContractorCallSigns.js";

import { generateProfessions }
from "./ContractorData/ContractorProfessions.js";

import { generateWarnings }
from "./ContractorData/ContractorWarnings.js";

import { generatePortraits }
from "./ContractorData/ContractorImages.js";

const BASE_STATS = {
    force: 1,
    operations: 1,
    adaptation: 1,
    expertise: 1
};

const BASE_SKILLS = {
    endurance: 0,
    physique: 0,
    engineering: 0,
    explosives: 0,
    bigguns: 0,
  
    voidcraft: 0,
    drive: 0,
    instinct: 0,
    cqc: 0,
    guns: 0,

    willpower: 0,
    xenotech: 0,
    shadow: 0,
    survival: 0,
    strom: 0,

    science: 0,
    electronics: 0,
    bureaucracy: 0,
    encyclopedia: 0,
    medicare: 0
};

export function generateContractors() {

    const contractors = [];

    const callsigns = generateCallSigns(CONTRACTOR_COUNT);
    const portraits = generatePortraits();
    const professions = generateProfessions(CONTRACTOR_COUNT);
    const warnings = generateWarnings(CONTRACTOR_COUNT);

  

    for(let i = 0; i < CONTRACTOR_COUNT; i++) {
    
    const profession = professions[i];
    const warning = warnings[i];
    const stats = structuredClone(BASE_STATS);
    const skills = structuredClone(BASE_SKILLS);

    profession.skills.forEach(skill => {skills[skill] += 1;});
    stats[profession.stat] += 1;

    warning.skills.forEach(skill => {skills[skill] += 1;});
    stats[warning.stat] += 1;

    const statNames = Object.keys(stats);
    let randomIndex = Math.floor(
        Math.random() * statNames.length
    );
    
    for(let n = 0; n < statNames.length; n++){
        const statName = statNames[randomIndex];
        if(stats[statName] < 3){
            stats[statName] += 1;
            break;
        }
            randomIndex = (randomIndex + 1) % statNames.length;
    }
    
      contractors.push({

            id: i + 1,

            callsign: callsigns[i],

            profession: profession.name,

            bio: profession.description,

            warning: warning.name,

            warningDescription: warning.description,

            portrait: portraits[i],

            stats,

            skills

        });
    }

    return contractors;
}
