import { Cpu } from "./Cpu.js";
import { Db } from "./db.js";

/**
 * Gère la collection de cpu
 */
class CpuCollection
{
    /**
     * Constructeur
     * initialise le tableau de données
     */
    constructor()
    {
        this.data =[];

        // valeur par défaut du sens de tri, si initialisé en true asc sinon desc
        this.sortedAsc = true;
    }

    /**
     * Chargement des données de la collection
     */
    async loadData()
    {
        this.data = await Db.getData("../cpuz.json");

        // pour chaque élément de la collection, on crée une instance de Cpu
        this.data = this.data.map(c => new Cpu(c));
    }

    /**
     * tri la collection par l'attribut price
     */
    sortByPrice() 
    {
        // fonction trie la collection en ordre croissant
        this.data = this.data.sort(
            (a,b) => a.price - b.price
        )
        
        // si le boleen sortedAsc est evalué à faux, alors on inverse le tri
        if (!this.sortedAsc)
        {
            this.data.reverse()
        }

        //on inverse le boleen comme cela le tri s'inversera au prochain clic
        this.sortedAsc = !this.sortedAsc;
    }

    /**
     * Filtre les données du tableau en fonction d'une recherche sur le nom complet
     * @param {String} val valeur à rechercher
     */
    async searchByFullName(val)
    {
        await this.loadData();
        val= val.trim();
        if(val.length > 0)
        {
            val = val.toLowerCase()
            this.data = this.data.filter(cpu => cpu.fullName.toLowerCase().includes(val));
        }
    }
}

export { CpuCollection }