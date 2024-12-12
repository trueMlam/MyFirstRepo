let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

function parseCSV(csv) {
    let rows = csv.split("\n");
    let headers = rows[0].split(",").map(header => header.toLowerCase());
    let result = rows.slice(1).map(row => {
        let values = row.split(",");
        let obj = {};
        headers.forEach((header, index) => {
            obj[header] = values[index];
        });
        return obj;
    });
    return result;
}

let dataObjects = parseCSV(csvString);

dataObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
dataObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
dataObjects.pop();

function filterOlderThan50(data) {
    return data.filter(person => parseInt(person.age) <= 50);
}

let filteredData = filterOlderThan50(dataObjects);

function sortByAge(data) {
    return data.sort((a, b) => parseInt(a.age) - parseInt(b.age));
}

let sortedData = sortByAge(filteredData);

function mapOccupationAndAge(data) {
    return data.map(person => ({
        ...person,
        job: person.occupation,
        age: (parseInt(person.age) + 1).toString()
    }));
}

let mappedData = mapOccupationAndAge(sortedData);

function sumAges(data) {
    return data.reduce((sum, person) => sum + parseInt(person.age), 0);
}

let totalAge = sumAges(mappedData);
let averageAge = totalAge / mappedData.length;

console.log(`Total Age: ${totalAge}`);
console.log(`Average Age: ${averageAge.toFixed(1)}`);

function toCSV(data) {
    let headers = Object.keys(data[0]).join(",");
    let rows = data.map(obj => Object.values(obj).join(","));
    return [headers].concat(rows).join("\n");
}

let finalCSV = toCSV(mappedData);
console.log(finalCSV);

function incrementAge(person) {
    person.age++;
}

function copyAndIncrementAge(person) {
    const copy = { ...person };
    copy.age++;
    return copy;
}