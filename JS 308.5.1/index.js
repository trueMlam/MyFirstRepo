function sum(arr){
    let res = 0
    for (let i=0;i<arr.length;i++){
     res=res+arr[i];
    }
    return res;
   }
   
   function avg(arr) {
       let total = sum(arr);
       let cnt= 0;
       for (let i=0;i<arr.length;i++) {
           cnt = cnt + 1;
       }
       let average = total / cnt
       return average;
   }
   
   function longest(arr) {
   let longest = ''; let maxlen = 0;
   for (let i=0;i<arr.length;i++) {
   if(arr[i].length > maxlen){
   longest = arr[i]
   maxlen = arr[i].length;
    }
   }
   return longest;
   }
   
   function filterLong(arr, len) {
       let res = []
       for(let i=0;i<arr.length;i++) {
           if(arr[i].length>len) res.push(arr[i])
           else console.log(arr[i] + ' too short')
       }
       return res;
   }
   
   function printRec(n) {
   if(n > 1) { printRec(n-1); }
   console.log(n);
   }
   
   let people = [
   {id: "42", name: "Bruce", occupation: "Knight", age: 41 },
   { id: "48", name: "Barry", occupation: "Runner", age: 25 },
   { id: "57", name: "Bob", occupation: "Fry Cook", age: 19 },
   { id: "63", name: "Blaine", occupation: "Quiz Master", age: 58 },
   { id: "7", name: "Bilbo", occupation: "None", age: 111 }
   ];
   
   function sortAge(arr){
       let sorted=arr.slice()
       let swapped = true
       while(swapped) {
       swapped = false;
       for(let i = 0; i<sorted.length-1;i++){
       if(sorted[i].age > sorted[i+1].age) {
           let tmp = sorted[i]
           sorted[i]=sorted[i+1]
           sorted[i+1]=tmp
           swapped = true
       }}}
       return sorted
   }
   
   function filterUnder50(arr) {
   let res=[]
   for(let i=0;i<arr.length;i++){
       if(arr[i].age<=50) {
           res.push(arr[i])
       }}
   return res;
   }
   
   function updateJobs(arr) {
   let updated = []
   for(let i=0;i<arr.length;i++){
   let person = {}
   for(let key in arr[i]) {
   if (key==="occupation") {
       person["job"]=arr[i][key]
   } else if(key==="age"){
       person[key]=arr[i][key]+1
   } else {
       person[key]=arr[i][key]
   }
   }
   updated.push(person);
   }
   return updated
   }
   
   function totalAge(arr) {
       let ageSum=0;
       for(let i=0;i<arr.length;i++){
           ageSum+=parseInt(arr[i].age)
       }
       return ageSum;
   }
   
   function avgAge(arr) {
       let sum = totalAge(arr);
       return sum/arr.length;
   }
   
   function incrementAge(obj){
       if(obj.age){obj.age=obj.age+1;}
   }
   
   function copyAndIncr(obj){
       let newObj = {}
       for(let key in obj){
           if(key==='age') newObj[key]=obj[key]+1
           else newObj[key]=obj[key]
       }
       return newObj;
   }
   
   console.log("sum:",sum([1,2,3,4,5]));
   console.log("avg:",avg([1,2,3,4,5]));
   console.log("longest string:",longest(["apple","banana","pineapple"]));
   console.log("longer than 3 chars:",filterLong(["say","hello","in","the","morning"], 3));
   printRec(5);
   
   console.log("sorted by age:", sortAge(people));
   console.log("under 50:", filterUnder50(people));
   console.log("updated jobs and ages:",updateJobs(people));
   
   console.log("total age:",totalAge(people));
   console.log("avg age:",avgAge(people));
   
   let p = { name: 'Test', age: 20 }
   incrementAge(p);
   console.log("age incremented:",p);
   
   let copyP = copyAndIncr(p);
   console.log("copied and age incremented:",copyP);   