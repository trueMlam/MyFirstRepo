import React from 'react';
function Hd() {
  return <h1>simple react app</h1>
}
function Cnt({c,t,fs}) {
 return <p style={{color:c,fontSize:fs}}>{t}</p>
}
function Ft() {
  return <footer>created by Ed 🙃</footer>
}
function App() {
  return (
    <div>
      <Hd />
      <Cnt c='blue' fs='20px' t='this is not my 1st react app' />
      <Cnt c='red' fs='18px' t='wish me luck..' />
      <Cnt c='green' fs='16px' t='got it, lol' />
      <Ft />
    </div>
  )
}
export default App;