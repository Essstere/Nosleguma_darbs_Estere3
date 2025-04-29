function createChristmasTree() {
    const treeHeight = 10; // Koka augstums
    const maxStarsInBase = 15; // Maksimālais zvaigžņu skaits

    // Cilpiņa pa kuru var redzēt koku
    for (let i = 1; i <= treeHeight; i++) {
        const numStars = i * 2 - 1; // Zvaigžņu daudzums noteiktajā kārtā
        const spaces = ' '.repeat(treeHeight - i); // Izrēķina atstarpes starp zvaigznēm
        const stars = '*'.repeat(numStars); // Izveido zvaigznes kautrai kārtai
        
        console.log(spaces + stars); // Izveido egles struktūru noteiktai kārtai
    }

    // Izveido koka stumbru
    const trunkWidth = 3; // Stumbra platums
    const trunkHeight = 3; // Stumbra augstums
    const trunkSpaces = ' '.repeat(treeHeight - 2); // Stumbra centrs

    for (let i = 0; i < trunkHeight; i++) {
        console.log(trunkSpaces + '|'.repeat(trunkWidth)); // Izveido katra stumbra kārtu
    }

    // Izveido zvaigznes kas parādas virs egles
    console.log(' '.repeat(treeHeight - 1) + '*');
}

// Pasauc funkciju lai koks ir displeja centrā
createChristmasTree();
