
function List() {

    const fruits = [{ id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 100 },
    { id: 3, name: "Orange", calories: 45 },
    { id: 4, name: "Mango", calories: 60 }];

    //Alphabet
    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    // fruits.sort((a, b) => b.name.localeCompare(a.name));

    //Numeric
    fruits.sort((a, b) => a.calories - b.calories)

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const listItems = lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.id}>
        {lowCalFruits.name}: &nbsp; {lowCalFruits.calories}</li>);

    return (<ol>{listItems}</ol>);
}
export default List