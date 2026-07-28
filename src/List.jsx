import PropTypes from "prop-types";

function List(props) {

    const itemList = props.items;
    const category = props.category;

    //Alphabet
    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    // fruits.sort((a, b) => b.name.localeCompare(a.name));

    //Numeric
    // fruits.sort((a, b) => a.calories - b.calories)

    // const lowCalFruits = itemList.filter(itemList => itemList.calories < 100);

    const listItems = itemList.map(itemList => <li key={itemList.id}>
        {itemList.name}: &nbsp; {itemList.calories}</li>);

    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
        </>
    );
}

List.defaultProps = {
    category: "Category",
    items: [],
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number,
    })),
}

export default List