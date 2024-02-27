const CALCULAR = document.getElementById('calcular')
const ERROR = document.getElementById('error')
const VOLDIARY = document.getElementById('volDiario')
const FLU = document.getElementById('flu')
const MAN = document.getElementById('man')
CALCULAR.addEventListener('click', () => {
    const DATO =  document.getElementById('peso').value 
    //VALIDAMOS QUE SE CARGUE UN DATO:
    if( DATO<=0){
        ERROR.style.display = 'block'
        VOLDIARY.style.display = 'none'
        FLU.style.display = 'none'
        MAN.style.display = 'none'
    }else if(DATO<30){
        ERROR.style.display = 'none'
        let flujo= calcFlujo(DATO)
        let mantenimiento = Math.round(flujo/24)
        let mAntenimiento = Math.round(mantenimiento*1.5)
        VOLDIARY.innerHTML = flujo + ' cc'
        FLU.innerHTML  = mantenimiento + ' cc/hr'
        MAN.innerHTML = 'm+m/2 ' + mAntenimiento + ' cc/hr'
        VOLDIARY.style.display = 'block'
        FLU.style.display = 'block'
        MAN.style.display = 'block'
    }else{
        ERROR.style.display = 'none'
         let SC1500 = Math.round((((DATO*4)+7)/(DATO + 90))*1500)
         let SC2000 =  Math.round((((DATO*4)+7)/(DATO + 90))*2000)
        VOLDIARY.innerHTML = SC1500 + ' cc  SC*1500 ' + SC2000 + ' cc  SC*2000'
        VOLDIARY.style.display = 'block'
        FLU.style.display = 'none'
        MAN.style.display = 'none'
    }
})
function calcFlujo(peso){
    let flujo=0
    if(peso<=10){
       flujo= 100*peso
       return flujo
    }else if(peso<=20){
        flujo= 1000+(50*(peso-10))
        return flujo
    }else if(peso<30){
        flujo= 1500+((peso-20)*20)
        return flujo
    }
}