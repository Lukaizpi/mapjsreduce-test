// idatzi hemen zure funtzioak
function ariketa1(zenbakia){
    return(zenbakia.map(z=>z*2));
}
function ariketa2(){
    const era = erabiltzaile.map(e=>e.izena+'k '+e.adina+' urte ditu')
}
function ariketa3(){
    console.filter(zen=>zen%2==0)
}
function ariketa4(){
    let ema = erabiltzaile.filter(era=>era.adina>17)
}
function ariketa5(){
   let batura=0;
   zenbakiak.reduce((batura, z)=>{return(batura+z)},0)
}
function ariketa6(){
    erabiltzaile.reduce((ema, era)=>{
        let adin=ema.adina||0;
        if(adin>era.adina){
            return(ema)
        }else{
            return(era)
        }
    },{})
}
function ariketa7(){
    zenbakiak.filter(zen=>zen%2==0).map(zen=>zen*2).reduce((bat, zen)=>{return bat+zen}, 0)
}
function ariketa8(){
    URLSearchParams.reduce((ema, u)=>{return (ema.concat(u.items))}, [])
}
function ariketa9(){
    zenbakia=zenbaakia.map(z=>z*2);
}
function ariketa10(){
    zenbakia=zenbaakia.map(z=>z*2);
}



export {ariketa1, ariketa2, ariketa3, ariketa4, ariketa5, ariketa6, ariketa7, ariketa8, ariketa9, ariketa10}
