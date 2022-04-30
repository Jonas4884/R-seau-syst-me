//Ceci est une approche aux problemes du battle dev de SuperDigit(un sujet de difficulté niveau 3)
export function superDigit(p){
    /*Ceci est une solution aux test unitaire*/
	if(p === undefined){
		throw new Error("Invalid value");
	}else{
		if(p.length === 0){
			throw new Error("Invalid value");
		}
	}
    /*Début de l'algorithme*/

    //Diviser le tableau en sous tableau
    let n = p.split("")[0];
	let k = p.split("")[1] == undefined ? 1:Number(p.split(" ")[1]);
     //Comptez les repetitions
     for(let i=0; i<k; i++){
		n.split("").forEach( (e) => {
			superdigit += Number(e);
		});

	}