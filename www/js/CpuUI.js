/**
 * Gère la mise à jour de l'interface Utilisateur (Ui)
 */
class CpuUI
{
    /**
     * Constructeur
     * @param {CpuCollection} _collection une instance de CpuCollection 
     */
    constructor(_collection)
    {
        // la collection de données à manipuler
        this.collection = _collection;

        // sélection de l'élément tbody du document HTML courant
        this.tbody = document.getElementById('cpuzBody');

        // sélection de l'élément span du document HTML courant
        this.span = document.getElementById('numberOfCpu');
    }

    /**
     * Génère le TBODY à partir des données de la collection 'this.collection'
     */
    generateTable()
    {
        this.tbody.innerHTML = ""; // on vide le tableau 

        // pour chaque élément de la collection, on crée une ligne de tableau HTML
        this.collection.data.forEach(c => {
            let tr = this.generateRow(c); // création d'une ligne du tableau HTML
            this.tbody.appendChild(tr); // insertion de la ligne dans le tbody courant 
        });

        //affectation du nombre d'élément de collection
        this.span.textContent = this.collection.data.length;
    }

    /**
     * Génère une ligne du tableau HTML.
     *  Une ligne correspond à un cpu
     * @param {Cpu} _cpu le cpu à afficher
     * @returns 
     */
    generateRow(_cpu)
    {
        let tr = document.createElement('tr'); // création d'un élément <tr>

        // pour chaque valeur d'un vol, on crée une cellule
        _cpu.getValues().forEach(val => {
            let td = this.generateCell(val); // création d'une cellule de tableau
            tr.appendChild(td); // ajout de la cellule à la ligne courante
        })

        return tr;
    }
    /**
     * Génère une cellule du tableau HTML
     * @param {String|Number} _val la valeur à insérer dans la cellule
     * @returns 
     */
    generateCell(_val)
    {
        let td = document.createElement('td'); // création d'un élément <td> (cellule de tableau)
        
        td.textContent = _val; // ajout de la valeur à la cellule
        return td;
    }

}

export { CpuUI }