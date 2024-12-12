import { findMovies } from './api.js'
import { showMvs, showMsg } from './ui.js'
import { addToFolder, makeFld, getFldMvs, rmFld } from './data.js'

document.getElementById('srch-btn').addEventListener('click',async()=>{
const q=document.getElementById('srch-in').value.trim()
if(q.length===0){showMsg("⚠️ enter title");return}

let mvs
try{
mvs=await findMovies(q)}catch(err){
console.log("fetch failed:",err)
showMsg("⚠️ couldn't retrieve movies")
return}

showMvs(mvs)
})

document.getElementById('add-f-btn').addEventListener('click',()=>{
const folderName=prompt('Enter new folder name:')
if(folderName){makeFld(folderName);loadFolders()}
})

function loadFolders(){
const fList=document.getElementById('f-list')
fList.innerHTML=`
<li class="f-item" data-folder="watch-later">⏳ watch later</li>
<li class="f-item" data-folder="favs">❤️ favs</li>`

const folders=JSON.parse(localStorage.getItem("mvFldrs"))||{}

document.querySelector(`[data-folder="watch-later"]`).addEventListener('click',()=>{
const mvs=getFldMvs('watch-later')
showMvs(mvs,'watch-later')})

document.querySelector(`[data-folder="favs"]`).addEventListener('click',()=>{
const mvs=getFldMvs('favs')
showMvs(mvs,'favs')})

for(const fld in folders){
if(fld!=='watch-later'&&fld!=='favs'){
const li=document.createElement('li')
li.classList.add('f-item')
li.textContent=`📁 ${fld}`
li.dataset.folder=fld

const delBtn=document.createElement('span')
delBtn.classList.add('del-btn')
delBtn.textContent='🗑️'
delBtn.onclick=(e)=>{
e.stopPropagation()
rmFld(fld)
loadFolders()}

li.onclick=()=>showMvs(getFldMvs(fld),fld)
li.appendChild(delBtn)
fList.appendChild(li)}
}}

loadFolders()