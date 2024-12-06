import { addToFolder, rmMovieFromFolder, getFoldersList } from './data.js'

export function showMvs(mvs,folder=null){
const gall=document.getElementById('gall')
gall.innerHTML=''

if(!Array.isArray(mvs)){console.warn("not array");return}

const customFolders=getFoldersList(['watch-later','favs'])

mvs.forEach(movie=>{
if(!movie||!movie.Title||!movie.Poster){console.warn("bad movie data",movie);return}

const card=document.createElement("div")
card.classList.add("movie-card")

const img=document.createElement('img')
img.src=movie.Poster!=='N/A'?movie.Poster:"default.jpg"
img.alt=movie.Title

const title=document.createElement("h3")
title.textContent=movie.Title

const year=document.createElement('p')
year.classList.add('year')
year.textContent=`(${movie.Year})`

const btnContainer=document.createElement('div')
btnContainer.classList.add('btn-container')

const wLBtn=document.createElement("button")
wLBtn.textContent="⏳ watch later"
wLBtn.onclick=()=>{addToFolder(movie,'watch-later');showMsg('added to watch later')}

const favBtn=document.createElement("button")
favBtn.textContent="❤️ fav"
favBtn.onclick=()=>{addToFolder(movie,'favs');showMsg('added to favs')}

btnContainer.appendChild(wLBtn)
btnContainer.appendChild(favBtn)

if(folder){
const delBtn=document.createElement('button')
delBtn.textContent='🗑️ remove'
delBtn.classList.add('del-btn')
delBtn.onclick=()=>{rmMovieFromFolder(movie.imdbID,folder);showMvs(getFldMvs(folder),folder)}
btnContainer.appendChild(delBtn)}

if(customFolders.length>0){
const folderSelect=document.createElement("select")
folderSelect.classList.add('folder-select')
folderSelect.innerHTML=`<option disabled selected>add to folder</option>`
customFolders.forEach(fld=>{
const option=document.createElement("option")
option.value=fld;option.textContent=fld
folderSelect.appendChild(option)})
folderSelect.onchange=()=>{
addToFolder(movie,folderSelect.value)
showMsg(`added to ${folderSelect.value}`)
folderSelect.selectedIndex=0}
btnContainer.appendChild(folderSelect)}

card.appendChild(img)
card.appendChild(title)
card.appendChild(year)
card.appendChild(btnContainer)
gall.appendChild(card)})

}

export function showMsg(msg){
const msgEl=document.getElementById("msg")
if(msgEl){
msgEl.textContent=msg
msgEl.style.display='block'
setTimeout(()=>msgEl.style.display='none',3000)}else{
console.log("msg element not found")}
}