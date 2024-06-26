const Max = require('max-api');

Max.addHandler('com', (input) => {
    // Split the input string into an array of values
    const values = input.split(' ');

    // Group the values by groups of two
    for (let i = 0; i < values.length; i += 2) {
        const group = values.slice(i, i + 2).map(value => parseFloat(value)); // Convert to numbers
        Max.outlet(group); // Output each group
    }
});
