/**
 * Représente un cpu
 */
class Cpu
{
    /**
     * Constructeur
     * @param {Object|Cpu} _cpu le cpu courant 
     */
    constructor(_cpu)
    {
        // clonage de l'objet reçu en paramètre dans l'objet courant
        Object.assign(this,_cpu);
        this.fullName = this.generateFullName();
    }

    /**
     * Retourne les valeurs de l'objet courant dans un tableau indexé
     * @returns {Array} Les valeurs de l'objet dans un tableau indexé
     */
    getValues()
    {
        return Object.values(this);
    }

    /**
     * Retourne le nom complet du cpu
     * @returns le nom complet
     */
    generateFullName()
    {
        return this.brand + " " + this.family + " " + this.model
    }
}

export { Cpu }