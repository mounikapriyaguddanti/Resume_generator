import React, { useState } from 'react';
import TemplatePage from './TemplatePage';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profile: '',
    phno: '',
    address: '',
    education: {
      degree: '',
      university: '',
      clgname: '',
      duration: ''
    },
    skills: '',
    experience: '',
    image: null 
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result }); 
    };

    if (file) {
      reader.readAsDataURL(file); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    onSubmit(formData);
  };

  return (
    <div className="container-fluid">
      {submitted ? (
        <TemplatePage formData={formData} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
        <input type="text" className='form-control' name="name" value={formData.name} onChange={handleChange} /><br />

        <label htmlFor="profile">Profile:</label>
        <textarea name="profile" id="profile" className='form-control' cols="30" rows="3" value={formData.profile} onChange={handleChange}></textarea><br />

        <label htmlFor="email">Email:</label>
        <input type="email" className='form-control' name="email" value={formData.email} onChange={handleChange}  /><br />

        <label htmlFor="phno">Contact Number:</label>
        <input type="tel" className='form-control' name="phno" value={formData.phno} onChange={handleChange}  /><br />

        <label htmlFor="address">Address:</label>
        <input type="text" className='form-control' name="address" value={formData.address} onChange={handleChange}  /><br />

        <label htmlFor="education-degree">Education Degree:</label>
        <input type="text" className='form-control' name="education-degree" value={formData.education.degree} onChange={(e) => setFormData({ ...formData, education: { ...formData.education, degree: e.target.value } })}  /><br />

        <label htmlFor="education-university">University Name:</label>
        <input type="text" className='form-control' name="education-university" value={formData.education.university} onChange={(e) => setFormData({ ...formData, education: { ...formData.education, university: e.target.value } })}  /><br />

        <label htmlFor="education-college">College Name:</label>
        <input type="text" className='form-control' name="education-college" value={formData.education.clgname} onChange={(e) => setFormData({ ...formData, education: { ...formData.education, clgname: e.target.value } })}  /><br />

        <label htmlFor="education-duration">Duration of Course:</label>
        <input type="text" className='form-control' name="education-duration" value={formData.education.duration} onChange={(e) => setFormData({ ...formData, education: { ...formData.education, duration: e.target.value } })}  /><br />

        <label htmlFor="skills">Skills:</label>
        <input type="text" className='form-control' name="skills" value={formData.skills} onChange={handleChange}  /><br />

        <label htmlFor="experience">Experience:</label>
        <input type="text" className='form-control' name="experience" value={formData.experience} onChange={handleChange}  /><br />

          <label htmlFor="image">Upload Image:</label>
          <input
            type="file"
            id="image"
            className="form-control"
            name="image"
            accept="image/*"
            onChange={handleImageChange} // Call handleImageChange for image uploads
            required
          /><br />
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
