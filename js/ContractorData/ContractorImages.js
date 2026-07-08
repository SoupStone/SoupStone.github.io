import { PORTRAIT_COUNT }
from "../config.js";

export function generatePortraits() {

    const portraits = [];

    for(let i = 1; i <= PORTRAIT_COUNT; i++) {
        portraits.push(`./assets/${i}.png`);
    }

    return portraits.sort(() => Math.random() - 0.5);
}
