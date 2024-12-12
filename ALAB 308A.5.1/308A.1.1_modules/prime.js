function primeCheck(num) {
    if(num <= 1) return !1
    let p = !0;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        p = !1
        break
      }
    }
    return p
  }
  
function addPrimes(n, el) {
   let current = 2; let primesFound = 0;
  
   function nextPrime() {
    console.log("Current number:", current);
     if (current <= n) {
       let prime = primeCheck(current)
       if (prime) {
         primesFound++
         el.innerHTML += current + ', '
         console.log('prime:', current, "total:", primesFound)
       }
       current++
       setTimeout(nextPrime, 10)
     } else {
       setTimeout(function(){ alert("done! total primes: " + primesFound) }, 500)
     }
   }
   nextPrime()
  }

  export { primeCheck, addPrimes };