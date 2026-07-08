function generatePortraits(count = 12) {

    const portraits = [];

    for(let i = 1; i <= count; i++) {
        portraits.push(`./assets/${i}.png`);
    }

    return portraits.sort(() => Math.random() - 0.5);
}
