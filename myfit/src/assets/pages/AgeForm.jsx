import { useState } from 'react';

export function AgeForm({ ageGroup }) {
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    activityLevel: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data for age group', ageGroup, formData);
    // Here you could save the data to state, localStorage, or send to a server
  };

  return (
    <div className="form-wrapper">
      <h2>Enter your info for age group: {ageGroup}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Weight (kg):
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Height (cm):
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Activity Level:
          <select
            name="activityLevel"
            value={formData.activityLevel}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
