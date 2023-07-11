import { CpuCollection } from "./CpuCollection.js";
import { CpuUI } from "./CpuUI.js"

console.log('Hello World !');

// création de l'instance qui gère la collection de données
let cpuCollection = new CpuCollection();

// chargement des données 
await cpuCollection.loadData();

console.log(cpuCollection.data);

// création de l'instance qui gère la mise à jour de l'interface.
// on y injecte la collection de données
let cpuUI = new CpuUI(cpuCollection);

// mise à jour de l'UI
cpuUI.generateTable();

/**
 * création de l'évenement qui trie le tableau en fonction du prix des cpus
 * quand on clique sur prix
 */
document.getElementById("price").addEventListener("click",(event)=>{
    cpuCollection.sortByPrice();
    cpuUI.generateTable();
})

/**
 * création de l'évenement qui recherche dans le tableau lorsque la valeur du champ de recherche change
 */
document.getElementById("searchField").addEventListener("input", async (event) => {
    let searchFieldValue = event.target.value;
    await cpuCollection.searchByFullName(searchFieldValue);
    cpuUI.generateTable();
})



