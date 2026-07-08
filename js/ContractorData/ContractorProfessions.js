// dummy data to be updated

export const PROFESSIONS = [

{
    name: "ASSAULT",
    description: "Former shock trooper trained for aggressive frontline operations. Assault contractors specialise in overwhelming force, rapid advances, and close-quarters engagements."
},

{
    name: "RECON",
    description: "Long-range reconnaissance specialist accustomed to operating beyond friendly lines. Recon contractors excel at observation, navigation, and intelligence gathering."
},

{
    name: "BREACHER",
    description: "Expert in forced entry and urban assault. Breachers are trained to overcome physical barriers through explosives, tools, and calculated violence."
},

{
    name: "MARKSMAN",
    description: "Precision shooter capable of engaging targets at extreme range. Marksmen provide overwatch, counter-sniper support, and selective elimination."
},

{
    name: "MEDIC",
    description: "Combat medical specialist experienced in battlefield trauma treatment. Medics keep contractors alive long enough to collect payment."
},

{
    name: "TECH OPS",
    description: "Electronic warfare and systems intrusion specialist. Tech operators disable security systems, intercept communications, and exploit hostile networks."
},

{
    name: "DEMOLITIONS",
    description: "Explosives expert trained in sabotage, controlled destruction, and munitions handling. Most employers prefer not to ask too many questions."
},

{
    name: "TRACKER",
    description: "Specialist in pursuit and wilderness operations. Trackers can locate people, vehicles, and hidden routes across difficult terrain."
},

{
    name: "INFILTRATOR",
    description: "Operative trained to enter restricted areas without detection. Infiltrators favour deception, stealth, and patience over direct confrontation."
},

{
    name: "NEGOTIATOR",
    description: "Professional intermediary used in disputes, hostage situations, and delicate commercial arrangements. Success rates vary considerably."
}

];
import { random } from "../Utils.js";
export function generateProfessions(count) {

    const professions = [];

    for(let i = 0; i < count; i++) {
        professions.push(random(PROFESSIONS));
    }

    return professions;
}
