// dumy data to be replaced

export const WARNINGS = [

{
    name: "PSYCHOTIC",
    description: "Displays unstable behaviour patterns under combat stress. Subject has a documented history of excessive violence and poor impulse control."
},

{
    name: "PARANOID",
    description: "Maintains an unhealthy distrust of employers, allies, and support personnel. Frequently investigates imagined conspiracies."
},

{
    name: "ARSONIST",
    description: "Shows an unusual fascination with fire and incendiary devices. Property damage claims involving this contractor are common."
},

{
    name: "CULTIST",
    description: "Associated with one or more fringe religious organisations. Subject's beliefs occasionally interfere with mission objectives."
},

{
    name: "LIAR",
    description: "Known to provide inaccurate reports, fabricated histories, and misleading statements when it suits personal interests."
},

{
    name: "NARCISSIST",
    description: "Exhibits an inflated sense of self-worth and frequently seeks recognition beyond operational requirements."
},

{
    name: "GAMBLER",
    description: "Maintains significant betting habits. Financial instability may impact reliability and contract compliance."
},

{
    name: "OBSESSIVE",
    description: "Displays fixation on specific routines, targets, or personal interests. Behaviour becomes unpredictable when these patterns are disrupted."
},

{
    name: "VIOLENT",
    description: "Possesses a well-documented history of excessive force incidents both in and out of combat environments."
},

{
    name: "MISSING EYE",
    description: "Sustained catastrophic facial trauma during a previous contract. Medical clearance remains active despite the injury."
}

];

import { random } from "../utils.js";
export function generateWarnings(count) {

    const warnings = [];

    for(let i = 0; i < count; i++) {
        warnings.push(random(WARNINGS));
    }

    return warnings;
}
