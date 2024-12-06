function calcMaxStack() {
  let count = 0;
 
  function recurse() {
   console.log("call num:", count)
    count++;
    try {
       recurse()
    } catch (e) {
     console.log('max calls: ' + count)
     return count
    }
  }
  return recurse()
 }
 
 calcMaxStack()
 
 
 function trampoline(f) {
  let res = f();
  while (typeof res === 'function') {
   res = res();
  }
  return res
 }
 
 function fact(n) {
   function helper(n, acc) {
     console.log("calc fact for", n, "acc:", acc)
     if (n <= 1) return acc
     return function () { return helper(n - 1, acc * n) }
   }
   return trampoline(function() { return helper(n, 1) })
 }
 
 console.log("fact 5 =", fact(5))
 
 
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
 
 let primeBox = document.getElementById("primeBox")
 
 addPrimes(10000, primeBox) 