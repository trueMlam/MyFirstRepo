const apiKey='75f2c84a',url="http://www.omdbapi.com/"

export async function findMovies(q){
let mvs=[]
if(!q||q.trim()===''){console.warn("empty query");return mvs}
const u=`${url}?apikey=${apiKey}&s=${q}`;let r
try{r=await fetch(u);if(!r.ok){console.error("http error:",r.status);return mvs}
const d=await r.json();if(d&&d.Search&&Array.isArray(d.Search)){mvs=d.Search}else{console.warn("no movies")}
}catch(err){console.error("fetch err:",err)}
return mvs}