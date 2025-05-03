export function Home() {
  return (
    <>
      <p className="introtex">
        Welcome to My Fit! Take control of your health by <br></br> easily
        tracking what you eat. Our app helps you count calories, monitor
        <br></br> your daily intake, and stay on top of your fitness goals
        <br></br> all in one simple, user-friendly place.
      </p>
      <h1 className="heading">Select your Age</h1>
      <div className="age-groups">
        <div className="ageGroup1">
          <p>
            <Link to="/1">18-29</Link>
          </p>
        </div>

        <div className="ageGroup2">
          <p>
            <Link to="/2">Age 30-39</Link>
          </p>
        </div>

        <div className="ageGroup3">
          <p>
            <Link to="/3">Age 40-49</Link>
          </p>
        </div>

        <div className="ageGroup4">
          <p>
            <Link to="/4">Age 50+</Link>
          </p>
        </div>
      </div>
    </>
  );
}
