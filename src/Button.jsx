

function Button() {
    const handleClick = () => {
        console.log("Ouch! You clicked me");
    }

    const handleClick2 = (name) => {
        console.log(`${name} stop clicking me`);
    }

    return (
        <button onClick={() => handleClick2("Felix")}>Click Me :D</button>
    )
}

export default Button