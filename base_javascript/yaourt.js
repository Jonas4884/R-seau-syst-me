//ceci est une approche au solution du battledev niveau 2 sur Isograd
let diff = ['rouge','jaune','blanc','rouge','jaune','noir','jaune','rouge','rouge'];
let color = [diff[0]];
let stock = [0];
//Rah mbola ts ao le color de push-ena anatnle tableau vide
for (let i = 1; i < diff.length; i++) {
    if (diff[0] != diff[i] && color.indexOf(diff[i]) == -1) {
        color.push(diff[i]);
        stock.push(0);
    }
}
//accumul-ena n couleur miverina rehetra
for (let i = 0; i < color.length; i++) {
    for (let j = 0; j < diff.length; j++) {
        if (color[i]==diff[j]) {
            stock[i] += 1;
        }
    }   
}
//Get max pour l'accumulateur[i]
let max = 0;
for (let i = 0; i < stock.length; i++) {
    if (stock[i+1] > stock[i]) {
        max = i+1;
    }
}