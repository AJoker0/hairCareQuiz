export function rankProduct(product, answers) {
    const hay = (product.title + " " + (product.body_html || "") + " " + + (product.tags || "")).toLowerCase();

    const keys = [];
    if (answers.q1) keys.push(answers.q1);
    if (answers.q2) keys.push(answers.q2);
    if (answers.q3) keys.push(answers.q3);
    if (answers.q4) keys.push(answers.q4);
    if (answers.q5) keys.push(answers.q5);

    let score = 0;
    keys.forEach(k => { if (hay.includes(k.toLowerCase())) score += 2; });

    const map = {
        Hydration: ["hydrate","moisture","moisturizing"],
    Volume: ["volume","volumizing","thickening"],
    "Anti-breakage": ["strength","repair","breakage","bond"],
    "Soothing dry scalp": ["scalp","soothe","itch","calm"],
    "Repairs appearance of damaged hair": ["repair","damage","restore"],
    "Curl and coil enhancing": ["curl","coily","curling","define"]
    };
    const benefit = answers.q3;
    if (benefit && map[benefit].forEach(w => {if (hay.includes(w)) score += 1; }));
    return score;

}
export function sortProducts(products, answers, wishlist) {
    const withScore = products.map(p => ({ ...p, _s: rankProduct(p, answers), _wish: wishlist.includes(p.handle) ? 1 : 0 }));
    //at first we put wishlist and then score
    return withScore.sort((a,b) => (b._wish - a._wish) || (b._s - a._s));
}