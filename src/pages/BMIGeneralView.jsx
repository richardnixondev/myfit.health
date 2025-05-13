import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '/src/BMIGeneralView.css'

function BMIGeneralView() {
  const [bmiData, setBmiData] = useState({ count: 0, records: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    gender: 'male',
    activityLevel: 'moderate'
  });
  const [isCreating, setIsCreating] = useState(false);

  const api = axios.create({
    baseURL: 'https://myfit-health-backend.onrender.com',
    timeout: 10000,
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await api.get('/bmi');
      setBmiData(response.data);
      setLoading(false);
    } catch (err) {
      setError(`Erro ao carregar dados: ${err.message}`);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal weight";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  const handleCreate = async () => {
    try {
      const bmiValue = calculateBMI(formData.weight, formData.height);
      const newRecord = {
        ...formData,
        bmiValue,
        bmiCategory: getBMICategory(bmiValue),
        activityDescription: getActivityDescription(formData.activityLevel)
      };

      await api.post('/bmi', newRecord);
      await fetchData();
      setIsCreating(false);
      setFormData({
        name: '',
        age: '',
        weight: '',
        height: '',
        gender: 'male',
        activityLevel: 'moderate'
      });
    } catch (err) {
      setError(`Erro ao criar registro: ${err.message}`);
    }
  };

  const handleEdit = (record) => {
    setEditingId(record.id);
    setFormData({
      name: record.name,
      age: record.age,
      weight: record.weight,
      height: record.height,
      gender: record.gender,
      activityLevel: record.activityLevel
    });
  };

  const handleUpdate = async (id) => {
    try {
      const bmiValue = calculateBMI(formData.weight, formData.height);
      const updatedRecord = {
        ...formData,
        bmiValue,
        bmiCategory: getBMICategory(bmiValue),
        activityDescription: getActivityDescription(formData.activityLevel)
      };

      await api.put(`/bmi/${id}`, updatedRecord);
      await fetchData();
      setEditingId(null);
    } catch (err) {
      setError(`Erro ao atualizar registro: ${err.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/bmi/${id}`);
      await fetchData();
    } catch (err) {
      setError(`Erro ao deletar registro: ${err.message}`);
    }
  };

  const getActivityDescription = (level) => {
    const activities = {
      sedentary: "Little or no exercise",
      light: "Light exercise 1-3 days/week",
      moderate: "Moderate exercise 3-5 days/week",
      active: "Hard exercise 6-7 days/week",
      veryActive: "Very hard exercise & physical job"
    };
    return activities[level] || level;
  };

  return (
    <div className="container">
      <h1 className="title">BMI Records ({bmiData.count})</h1>
      
      {error && <div className="error">{error}</div>}

      {loading ? (
        <div className="loading">Loading records...</div>
      ) : (
        <>
          <button 
            onClick={() => setIsCreating(true)}
            className="create-button"
          >
            Add New Record
          </button>

          {(isCreating || editingId) && (
            <div className="form-container">
              <h2>{editingId ? 'Edit Record' : 'Create New Record'}</h2>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
              
              <div className="form-group">
                <label>Age:</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
              
              <div className="form-group">
                <label>Weight (kg):</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
              
              <div className="form-group">
                <label>Height (cm):</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  className="input"
                />
              </div>
              
              <div className="form-group">
                <label>Gender:</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="input"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Activity Level:</label>
                <select
                  name="activityLevel"
                  value={formData.activityLevel}
                  onChange={handleInputChange}
                  className="input"
                >
                  <option value="sedentary">Sedentary</option>
                  <option value="light">Light</option>
                  <option value="moderate">Moderate</option>
                  <option value="active">Active</option>
                  <option value="veryActive">Very Active</option>
                </select>
              </div>
              
              <div className="button-group">
                <button
                  onClick={editingId ? () => handleUpdate(editingId) : handleCreate}
                  className="save-button"
                >
                  {editingId ? 'Update' : 'Save'}
                </button>
                <button
                  onClick={() => {
                    setEditingId(null);
                    setIsCreating(false);
                  }}
                  className="cancel-button"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div className="table-container">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Weight</th>
                  <th>Height</th>
                  <th>Gender</th>
                  <th>Activity</th>
                  <th>BMI</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bmiData.records.map(record => (
                  <tr key={record.id}>
                    <td>{record.name}</td>
                    <td>{record.age}</td>
                    <td>{record.weight} kg</td>
                    <td>{record.height} cm</td>
                    <td>{record.gender.charAt(0).toUpperCase() + record.gender.slice(1)}</td>
                    <td>{record.activityDescription}</td>
                    <td>{record.bmiValue}</td>
                    <td>{record.bmiCategory}</td>
                    <td>
                      <button
                        onClick={() => handleEdit(record)}
                        className="edit-button"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(record.id)}
                        className="delete-button"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default BMIGeneralView;