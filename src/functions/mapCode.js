

export function GetPunkName(texto) {
    let iterWord = 0;
    let characters = [``, ``]
    let toColect = true;
    let punkName = ``;
    while (toColect && iterWord < texto.length) {
        if (characters[0] === `` && characters[1] === ``) {
            if (texto[iterWord] !== ` `) {
                characters[0] = `#`
            }
        } else if (characters[0] !== `` && characters[1] === ``) {
            if (texto[iterWord] === ` `) {
                characters[1] = ` `
            }
        } else if (characters[0] !== `` && characters[1] !== ``) {
            if ((texto[iterWord] === `(` || texto[iterWord] === ` `) && punkName.length >= 1) {
                toColect = false
            }
            if (texto[iterWord] !== ` ` && texto[iterWord] !== `(`) {
                punkName += texto[iterWord]
            }
        }
        iterWord++;
    }
    return (punkName);
}

export function GetAttributes(texto) {
    let currentWord = "";
    let iterWord = 0;
    let toColect = true;
    let colectWord = false;
    let lstParam = [];
    while (toColect && iterWord < texto.length) {
        if (colectWord && texto[iterWord] !== `,` && texto[iterWord] !== ` `) {
            currentWord += texto[iterWord];
        }
        if (texto[iterWord] === `(`) {
            colectWord = true;
        }
        iterWord++;
        if ((colectWord && texto[iterWord] === `,`) || texto[iterWord] === `)`) {
            lstParam.push(currentWord);
            currentWord = ""
        }
        if (texto[iterWord] === `)`) {
            colectWord = false;
            toColect = false;
        }
    }
    return (lstParam)
}