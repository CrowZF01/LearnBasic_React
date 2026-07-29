
function ProfilePicture() {
    const imageUrl = "./src/assets/solo.webp";

    const handleClick = (e) => e.target.style.display = "none";

    return (
        <img onClick={(e) => handleClick(e)} src={imageUrl} alt="Profile Picture"></img>
    )
}

export default ProfilePicture