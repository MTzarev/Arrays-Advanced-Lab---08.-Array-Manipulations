function arrayManipulations (input){
let numbers = input
.shift()
.split(` `)
.map(Number);

for (let row of input){
    let [command, first, second] = row.split(` `)
switch (command){
    case "Add":
        numbers.push(Number(first));
        break;
    case "Remove":
        numbers=numbers.filter(num=>num !==Number(first));
        break;
    case `RemoveAt`:
        numbers.splice(Number(first),1);
        break;
    case `Insert`:
        numbers.splice(Number(second),0,Number(first));
        break;

}



}


    console.log(numbers.join(` `));
}
arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);
//arrayManipulations(['6 12 2 65 6 42',
//'Add 8',
// 'Remove 12',
// 'RemoveAt 3',
// 'Insert 6 2']
// );