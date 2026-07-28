
function List() {

    const fruits = [{ id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 100 },
    { id: 3, name: "Orange", calories: 45 },
    { id: 4, name: "Mango", calories: 60 }];


    const listItems = fruits.map(fruit => <li key={fruit.id}>
        {fruit.name}: &nbsp; {fruit.calories}</li>);

    return (<ol>{listItems}</ol>);
}
export default List