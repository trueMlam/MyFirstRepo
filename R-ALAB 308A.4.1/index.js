const key='live_Y6sC73W3bRpNmUa6ryGb83AXPFIr3R59JmkVHkvNcqAkddhZ6Bt4eqlOc1FUqGZu';

async function load() {
 const url = 'https://api.thecatapi.com/v1/breeds';
 const sel=document.getElementById("breedSel")
  try {
   let res = await fetch(url, {
    headers: {'x-api-key': key}
   });

   if (res.ok) {
     let data = await res.json();
     
     while (sel.firstChild) { sel.removeChild(sel.firstChild);}

     const defOpt = document.createElement("option");
     defOpt.textContent = '--select--';
     defOpt.value = '';
     sel.appendChild(defOpt);

     data.forEach(cat => {
      const opt = document.createElement("option");
      opt.value = cat.id;
      opt.innerHTML = cat.name;
      sel.appendChild(opt);
     });
   } else {console.error("failed load breeds. status:", res.status);}
 } catch (err) {console.error("error loading breeds:", err);}
}

async function loadInfo(id) {
 const info=document.getElementById("infoDump");
 const prog=document.getElementById("progBar");
 const url=`https://api.thecatapi.com/v1/images/search?breed_ids=${id}&limit=3`;
  try {
   prog.style.width='0%';
   let res=await fetch(url, {headers: {'x-api-key': key}});
   if (res.status==200) {
     let imgs=await res.json();
     while (info.firstChild) {info.removeChild(info.firstChild);}
     if (imgs[0].breeds && imgs[0].breeds[0] && imgs[0].breeds[0].description) {
      const desc=document.createElement("p");
      desc.textContent=imgs[0].breeds[0].description;
      info.appendChild(desc);
  }
  
  imgs.forEach((img, idx)=> {
      const image = document.createElement("img");
      image.src=img.url;
      image.alt=`img ${idx+1} breed ${id}`;
      info.appendChild(image);
  }); 
     prog.style.width='100%';
   } else {console.log("failed load breed info:", res.status);}
 } catch (e) {console.log("error loading breed info:", e);}
}

document.getElementById("breedSel").addEventListener("change", (e)=> {
  const id=e.target.value;
  if (id) {loadInfo(id);}
});

document.getElementById("refreshBtn").addEventListener("click", () => {
  console.log("refreshing list..");
  load();
});

document.addEventListener("DOMContentLoaded", () => {
 console.log("loading breeds..");
 load();
});