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

   export { trampoline, fact }