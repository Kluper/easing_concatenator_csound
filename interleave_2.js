const path = require('path');
const Max = require('max-api');
const fs = require('fs');

let lista = [];
let listb = [];

// Handler for the first list
Max.addHandler('addToListA', (...elements) => {
    lista.push(...elements);
});

// Handler for the second list
Max.addHandler('addToListB', (...elements) => {
    listb.push(...elements);
});

// Handler to interleave the lists
Max.addHandler('interleave', () => {
    const result = [];

    // Get the maximum length of the two lists
    const maxLength = Math.max(lista.length, listb.length);

    // Interleave the lists
    for (let i = 0; i < maxLength; i++) {
        if (i < lista.length) {
            result.push(lista[i]);
        }
        if (i < listb.length) {
            result.push(listb[i]);
        }
    }

    // Output the interleaved list
    Max.outlet( result);
});
