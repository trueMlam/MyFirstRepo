const key='live_Y6sC73W3bRpNmUa6ryGb83AXPFIr3R59JmkVHkvNcqAkddhZ6Bt4eqlOc1FUqGZu';

axios.defaults.baseURL='https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key']=key;

async function loadAxios() {
 const sel=document.getElementById("breedSel")
 try {
   let res=await axios.get('/breeds');

   if (res.status==200) {
     const cats=res.data;

     while (sel.firstChild) { sel.removeChild(sel.firstChild);}

     const defOpt = document.createElement("option");
     defOpt.textContent='--select--';
     defOpt.value='';
     sel.appendChild(defOpt);

     cats.forEach(c=> {
       const opt = document.createElement("option");
       opt.value=c.id;
       opt.textContent=c.name;
       sel.appendChild(opt);
     });
     console.log("breeds loaded ok")
   }
 } catch (err) {console.log("error fetching breeds", err);}
}

async function loadInfoAxios(id) {
 const info=document.getElementById("infoDump");
 const prog=document.getElementById("progBar");

 try {
   prog.style.width='0%';

   let res = await axios.get(`/images/search?breed_ids=${id}&limit=3`);

   if (res.status===200) {
     const imgs=res.data;

     while (info.firstChild) { info.removeChild(info.firstChild);}

     imgs.forEach((img,idx)=> {
       const image=document.createElement('img');
       image.src=img.url;
       image.alt=`img ${idx+1}`;

       if (img.breeds&&img.breeds[0]&&img.breeds[0].description) {
         const desc=document.createElement("p");
         desc.innerText=img.breeds[0].description;
         info.appendChild(desc);
       }

       info.appendChild(image);
     });

     prog.style.width='100%';
   }
 } catch (err) { console.log("error fetching info", err); }
}

document.getElementById('breedSel').addEventListener('change',function(e){
  const id=e.target.value;
  if(id) loadInfoAxios(id);
});

document.getElementById("refreshBtn").addEventListener("click",function(){
 console.log("refreshing list..");
 loadAxios();
});

document.addEventListener("DOMContentLoaded",function(){
 console.log("initializing with axios..");
 loadAxios();
});