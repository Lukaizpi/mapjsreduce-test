// idatzi hemen zure funtzioak
function ariketa1(zenbakia){
    return(zenbakia.map(z=>z*2));
}
function ariketa2(erabiltzaile){
    return(erabiltzaile.map(e=>e.izena+'-k '+e.adina+' urte ditu'));
}
function ariketa3(zenbaki){
    return(zenbaki.filter(zen=>zen%2==0));
}
function ariketa4(erabiltzaile){
    return(erabiltzaile.filter(era=>era.adina>17));
}
function ariketa5(zenbakiak){
   let batura=0;
   return(zenbakiak.reduce((batura, z)=>{return(batura+z)},0));
}
function ariketa6(erabiltzaile){
    return (erabiltzaile.reduce((ema, era)=>{
        let adin=ema.adina||0;
        if(adin>era.adina){
            return(ema)
        }else{
            return(era)
        }
    },{}))
}
function ariketa7(zenbakiak){
    return(zenbakiak.filter(zen=>zen%2==0).map(zen=>zen*2).reduce((bat, zen)=>{return bat+zen}, 0));
}
function ariketa8(URLSearchParams){
    return(URLSearchParams.reduce((ema, u)=>{return (ema.concat(u.items))}, []))
}
function ariketa9(erabiltzaile){
    let a = erabiltzaile.filter(era=>era.adina>17)
    let batura=0;
    let b = a.map(a=>a.erosketak.reduce((batura, era)=>batura+era, 0))
    let batu=0;
    return(b.reduce((batu, era)=>batu+era, 0))
}
function ariketa10(erabiltzaile){
    let batura=0;
    let a = erabiltzaile.map(a=>{
        let b = a.scores.reduce((batura, era)=>(batura+era), 0)
        let c = b/a.scores.length;
        return { name: a.name, batezbestekoa: c };
    })
    return a.reduce((ema, era) => {
        if (ema.batezbestekoa > era.batezbestekoa) {
            return ema; // Si el promedio actual es mayor, se mantiene el mismo
        } else {
            return era; // Si no, se reemplaza por el nuevo estudiante
        }
    }, { name: '', batezbestekoa: 0 });
}



export {ariketa1, ariketa2, ariketa3, ariketa4, ariketa5, ariketa6, ariketa7, ariketa8, ariketa9, ariketa10}
