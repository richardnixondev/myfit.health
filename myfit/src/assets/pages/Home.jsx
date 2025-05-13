export function Home() {
  return (
    <>
      <p className="introtex">
        Welcome to My Fit! Take control of your health by <br></br> easily tracking what
        you eat. Our app helps you count calories, monitor<br></br> your daily intake,
        and stay on top of your fitness goals<br></br> all in one simple, user-friendly
        place.
      </p>
      <h1 className="heading">Select your Age</h1>
      <div className="age-groups">
        <div className="ageGroup1">
          <p>Age 18-29</p>
        </div>

        <div className="ageGroup2">
          <p>Age 30-39</p>
        </div>

        <div className="ageGroup3">
          <p>Age 40-49</p>
        </div>

        <div className="ageGroup4">
          <p>Age 50+</p>
        </div>
      </div>
    </>
  );
}
