/**
 * Gère l'appel à une API distante
 */
class Db
{
    /**
     * Charge les données JSON à partir d'un chemin d'accès
     * @param {String} _access chemin d'acces du JSON à appeler avec fetch 
     * @returns {Array} La collection de donnée brute
     */
    static async getData(_access)
    {
        let res = await fetch(_access);
        let json = await res.json();
        return json;
    }
}

export {Db}