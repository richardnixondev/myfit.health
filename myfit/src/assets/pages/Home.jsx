import { Link } from "react-router";
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
          <button>
            {" "}
            <Link to="/1">Age 18-29</Link>
          </button>
        </div>

        <div className="ageGroup2">
          <button>
            <Link to="/2">Age 30-39</Link>
          </button>
        </div>

        <div className="ageGroup3">
          <button>
            <Link to="/3">Age 40-49</Link>
          </button>
        </div>

        <div className="ageGroup4">
          <button>
            <Link to="/4">Age 50+</Link>
          </button>
        </div>
      </div>
    </>
  );
}
