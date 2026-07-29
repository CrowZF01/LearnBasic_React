

function Button() {

    let count = 0;
    const handleClick = (name) => {
        if (count < 3) {
            count++;
            console.log(`This is the ${count} time you click me ${name}`);
        }
        else {
            console.log(`${name} stop clicking me!`)
        }
    }

    return (
        <button onClick={() => handleClick("Felix")}>Click Me :D</button>
    )
}

export default Button