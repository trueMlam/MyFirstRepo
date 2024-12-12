export function addToFolder(mv,fld){
    let mvFldrs=JSON.parse(localStorage.getItem("mvFldrs"))||{}
    
    if(!mvFldrs[fld]){mvFldrs[fld]=[]}
    
    const f=mvFldrs[fld]
    const exists=f.some(m=>m.imdbID===mv.imdbID)
    if(!exists){f.push(mv)}
    
    localStorage.setItem("mvFldrs",JSON.stringify(mvFldrs))
    }
    
    export function getFldMvs(fld){
    const mvFldrs=JSON.parse(localStorage.getItem("mvFldrs"))||{}
    return mvFldrs[fld]||[]
    }
    
    export function makeFld(name){
    const mvFldrs=JSON.parse(localStorage.getItem("mvFldrs"))||{}
    if(!mvFldrs[name]){
    mvFldrs[name]=[]
    localStorage.setItem("mvFldrs",JSON.stringify(mvFldrs))}
    }
    
    export function rmFld(fld){
    const mvFldrs=JSON.parse(localStorage.getItem("mvFldrs"))||{}
    if(mvFldrs[fld]){
    delete mvFldrs[fld]
    localStorage.setItem("mvFldrs",JSON.stringify(mvFldrs))}
    }
    
    export function rmMovieFromFolder(imdbID,fld){
    const mvFldrs=JSON.parse(localStorage.getItem("mvFldrs"))||{}
    if(mvFldrs[fld]){
    mvFldrs[fld]=mvFldrs[fld].filter(m=>m.imdbID!==imdbID)
    localStorage.setItem("mvFldrs",JSON.stringify(mvFldrs))}
    }
    
    export function getFoldersList(exclude=[]){
    const mvFldrs=JSON.parse(localStorage.getItem("mvFldrs"))||{}
    return Object.keys(mvFldrs).filter(fld=>!exclude.includes(fld))
    }