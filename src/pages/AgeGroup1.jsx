import { Link } from 'react-router-dom'; // Ensure Link is imported from react-router-dom

export function AgeGroup1() {
  return (
    <>
      <p>Select your details for age group: 18-29</p>
      <Link to="/1">Go to AgeForm</Link> 
      
    </>
  );
}
