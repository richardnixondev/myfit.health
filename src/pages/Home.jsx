import { useNavigate } from "react-router-dom";
import "../home.css"; 

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <p className="intro-text">
        Welcome to My Fit! Take control of your health by <br />
        easily tracking what you eat. Our app helps you count calories, monitor
        <br />
        your daily intake, and stay on top of your fitness goals
        <br />
        all in one simple, user-friendly place.
      </p>
      
      <h1 className="heading">Just a few details and you're all set 🚀</h1>
      
      <button 
        onClick={() => navigate('/bmi')} 
        className="start-button"
      >
        Get Started
      </button>
    </div>
  );
}
