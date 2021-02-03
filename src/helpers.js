export const revisarPresupuesto = (presupuesto, restante) =>{
    let clase
    if((presupuesto/4) > restante){
        clase = "bg-red-700"
    }else if((presupuesto/2) > restante){
        clase = "bg-yellow-400"
    }else{
        clase = "bg-green-100"
    }

    return clase
}