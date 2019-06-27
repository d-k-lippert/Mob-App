/*weise der Konstante serializedState das zu was in dem Local Storage unter dem Key "state" gespeichert ist zu*/
/*wenn Konstante einen Wert besitzt -> formatiere JSON in Array*/
export const loadState = () =>
{
    try{
        const serializedState = localStorage.getItem('state');
        if(serializedState === null)
        {
            return undefined;
        }
        return JSON.parse(serializedState)
    }
    catch(err){
        return undefined;
    }
};

/*passiert VOR der loadState Funktion, wenn nichts im Local Storage exisitiert*/
/*speichere den Zustand als JSON-String in Konstante */
/*dann setze den Wert der Konstante in den Local Storage und weise ihr den Key "state" zu*/
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch(err)
    {
        //Ignore write errors.
    }
}