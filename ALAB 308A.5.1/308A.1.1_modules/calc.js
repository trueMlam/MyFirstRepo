export function calcMaxStack() {
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