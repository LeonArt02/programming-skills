/* 
s.sort((a,b)=>a-b) sort array as numbers (default is alphabetical)
.slice(1,-1) remove first and last element (min and max)
.reduce((a,b)=>a+b) get the total sum of the elements left
/(s.length-2) divide sum by number of elements (minus min and max)
*/

const average=(s)=>s.sort((a,b)=>a-b).slice(1,-1).reduce((a,b)=>a+b)/(s.length-2)

ex1 =average([4000,3000,1000,2000]);
console.log(ex1);

// ANOTHER SOLUTION
const average = function(salary) {
    let sorted = salary.sort((a,b) => b - a);
    sorted.pop();
    sorted.shift();
    let total = 0; 
    for(let i = 0; i < sorted.length; i++){
        total += sorted[i];
    }
    return total/sorted.length; 
};