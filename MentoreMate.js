function MentorMateLogo(n) {
    let token = n + 1;
    let string = '';
    let token1 = n;
    let token2 = n;
    let token3 = n;
    let token4 = n - (token / 2);
    let token5 = 1;
    let token6 = n * 2 - 1;
    let token7 = n * 2;
    let token8 = token7 - ((token / 2) * 2);
    for (let i = 0; i < token; i++) {
        for (let r = 1; r <= token / 2; r++) {
            string += '-'.repeat(token1)
            string += '*'.repeat(token2)
            string += '-'.repeat(token3)
            string += '*'.repeat(token2)
            string += '-'.repeat(token7)
            string += '*'.repeat(token2)
            string += '-'.repeat(token3)
            string += '*'.repeat(token2)
            token1 -= 1;
            token2 += 2;
            token3 -= 2;
            token7 -= 2;
            console.log(string);
            string = ''
        }
        for (let k = 1; k <= token / 2; k++) {
            string += '-'.repeat(token4)
            string += '*'.repeat(n)
            string += '-'.repeat(token5)
            string += '*'.repeat(token6)
            string += '-'.repeat(token5)
            string += '*'.repeat(n)
            string += '-'.repeat(token8)
            string += '*'.repeat(token)
            string += '-'.repeat(token5)
            string += '*'.repeat(token6)
            string += '-'.repeat(token5)
            string += '*'.repeat(n)
            console.log(string);
            token4 -= 1;
            token5 += 2;
            token6 -= 2;
            token8 -= 2;
            string = ''
        }
        break
    }
}
MentorMateLogo(5)