let n = 1; 
while (n <= 100) {     
    let by3 = false; 
    let by5 = false;

    for (let i = 3; i <= n; i += 3) {
        if (i === n) { 
            by3 = true; 
        }
    }

    for (let j = 5; j <= n; j += 5) {
        if (j === n) {
            by5 = true;
        }
    }

    if (by3 && by5) {
        console.log('fizz buzz');
    } else if (by3) { 
        console.log('fizz');
    } else if (by5) {
        console.log('buzz'); 
    } else {
        console.log(n);
    }

    n++;
}

function isprime(x) {
    let divisors = 0;

    for (let i = 1; i <= x; i++) {  
        if (x % i === 0) { 
            divisors++;
        }
    }

    return divisors === 2;  
}

let startnum = 4;
let found = false;
let candidate = startnum + 1;

while (!found) {   
    let prime = isprime(candidate); 
  
    if (prime) {
        console.log("next prime: " + candidate); 
        found = true;
    } else {
        candidate++;
    }
}

let csv = "id,name,job,age\n42,bruce,knight,41\n57,bob,cook,19\n63,blaine,quiz,58\n98,bill,assistant,26";

let rows = [];  
let temp = '';   

for (let i = 0; i < csv.length; i++) {  
    let c = csv[i];    

    if (c !== '\n') {       
        temp += c;
    } else { 
        rows.push(temp);
        temp = '';  
    }
}
rows.push(temp);  

for (let r = 0; r < rows.length; r++) { 
    let line = rows[r]; 
    let cell = '';   
    let cells = [];

    for (let j = 0; j < line.length; j++) {
        if (line[j] !== ',') {
            cell += line[j];
        } else { 
            cells.push(cell);  
            cell = '';  
        }
    }
    cells.push(cell);  
    console.log(cells[0], cells[1], cells[2], cells[3]);  
}