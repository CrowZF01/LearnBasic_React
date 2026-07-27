import profilePic from './assets/solo.webp'

function Card() {
    return (
        <div className="card">
            <img src={profilePic} alt="Profile Picture" className="card-image"></img>
            <h2 className="card-title">CrowZF</h2>
            <p className="card-description">Im learning React Right Now</p>
        </div>
    )
}

export default Card 