
import Personalinfo from "./components/personalinfo";
import ProfessionalDetail from "./components/professional";
import Preference from "./components/preference"
import Sidebar from "./components/sidebar";

import "./App.css";
import { useState } from "react";



 function App() {

  const [formData,setFormData]= useState({
    fullName : "",
    email :"",
    phone :"",
    age : "",
    dateOfBirth : "", 
    address : "",

    //  professional details 
    department:"",
    experience:"",
    joiningDate:"",
    skills: [],
    employmentType:"Full-Time",

    // Preference details
    contactMethods:[],
    notificationsEnabled: false,
    additionalNotes:"",
    agreeTerms: false,
    

  });

  const [records,setRecords]=useState(() => {
    const savedRecords = localStorage.getItem("records");

    return savedRecords ? JSON.parse(savedRecords) : [];
  });

  const [errors, setErrors] = useState({});
  const [editIndex, setEditIndex] = useState(null);

function handleChange(event) {
  const { name, value, checked, type } = event.target;

  if (name === "skills" || name === "contactMethods") {
    setFormData((prevData) => {
      const oldValues = prevData[name];

      const updatedValues = checked
        ? [...oldValues, value]
        : oldValues.filter((item) => item !== value);

      return {
        ...prevData,
        [name]: updatedValues,
      };
    });
  } else {
    setFormData((prevData) => ({
      ...prevData,
      [name]:type === "checkbox" ? checked : value,
    }));
  }
  
    setErrors((prevData)=>({
      ...prevData,
      [name]:""
    }));

  }

    function ValidationPersonalInfo(){
      const errors = {};
      // name validation
      if(!formData.fullName.trim()){
        errors.fullName = "Full Name is Required";
      } else if(!/^[a-zA-Z\s]+$/.test(formData.fullName.trim())){
        errors.fullName = "Name should contain only letters";
      }
      // email validiton
      if(!formData.email.trim()){
        errors.email = "Email is Required";      
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())){
        errors.email = "Enter a valid Email";
      }
      // phone validation 
      if(!formData.phone.trim()){
        errors.phone = "Phone Number is Required";
      } else if ( !/^[0-9]{10}$/.test(formData.phone)){
        errors.phone = "Enter exactly 10 digits";
      } 

      // age validation 
      if (formData.age === "") {
        errors.age = "Age is Required";
      } else if (
        !Number.isInteger(Number(formData.age)) ||
        Number(formData.age) < 18 ||
        Number(formData.age) > 100
      ) {
        errors.age = "Age must be between 18 and 100";
      }


      // date of birth validation 
       if (!formData.dateOfBirth) {
         errors.dateOfBirth = "Date of birth is required";
      } else if (
      formData.dateOfBirth >=
       new Date().toISOString().split("T")[0]
      ) {
        errors.dateOfBirth = "Date of birth must be in the past";
      }
     
if (formData.dateOfBirth && formData.age !== "") {
  const today = new Date();
  const birthDate = new Date(formData.dateOfBirth);

  let calculatedAge = today.getFullYear() - birthDate.getFullYear();

  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 &&
      today.getDate() < birthDate.getDate())
  ) {
    calculatedAge--;
  }
 
  if (calculatedAge !== Number(formData.age)) {
    errors.age = "Age does not match Date of Birth";
  }
}

     
      
      //  address validation
      if (!formData.address.trim()){
        errors.address = "Address is required";
      } else if (formData.address.trim().length < 5){
        errors.address = "Address must be at least 5 characters";
      }

      // deparment validation
      if(!formData.department){
        errors.department = "Please select a department"
      }

      if(formData.experience === "") {
    errors.experience = "Experience is required";
  } else if (
    Number(formData.experience) < 0 ||
    Number(formData.experience) > 60
  ) {
    errors.experience = "Experience must be between 0 and 60 years";
  }

  // Joining 
  const today = new Date().toISOString().split("T")[0];

  if (!formData.joiningDate) {
    errors.joiningDate = "Joining date is required";
  } else if (formData.joiningDate < today) {
    errors.joiningDate = "Joining date cannot be in the past";
  }

  // Skills validation
  if (formData.skills.length === 0) {
    errors.skills = "you can select one or more skills";
  }

  // Employment type validation
  if (!formData.employmentType) {
    errors.employmentType = "Please select employment type";
  }

  if (formData.contactMethods.length === 0) {
  errors.contactMethods = "Please select at least one contact method";
  }

  if (!formData.agreeTerms) {
  errors.agreeTerms = "Please accept the Terms and Conditions";
}





      return errors;

  }

  function savedRecords(updateRecords){
    setRecords(updateRecords);

    localStorage.setItem(
      "records",
      JSON.stringify(updateRecords)
    );
  }

  function handleDelete(index) {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this record?"
  );

  if (confirmDelete) {
    const updateRecords = records.filter(
      (_, recordIndex) => recordIndex !== index
    );

    savedRecords(updateRecords);

    alert("Record deleted successfully!");
  }
}
  function handleEdit(index){
    setFormData({...records[index]});
    setEditIndex(index);
    setErrors({});
  window.scrollTo({
    top:0,
    behavior:"smooth",
  });
  }

  function handleReset(){
    setFormData({
      fullName:"",
      email:"",
      phone : "",
      age:"",
      dateOfBirth: "",
      address:"",
      department:"",
      experience:"",
      joiningDate:"",
      skills:[],
      employmentType: "Full-Time",

      contactMethods:[],
      notificationsEnabled: false,
      additionalNotes:"",
      agreeTerms: false

    });

    setErrors({});
    setEditIndex(null);
  }

  function handleSubmit(event){
    event.preventDefault();

    const validationErrors= ValidationPersonalInfo();

    setErrors(validationErrors);

    if(Object.keys(validationErrors).length > 0){
      return;
    }
   
     if(editIndex!== null){
      const updateRecords =[...records];
      updateRecords[editIndex] = {...formData};
    
     savedRecords(updateRecords);
     setEditIndex(null);
     alert("Record update successfully!");
     } else {
      const updateRecords = [...records, {...formData}];

      savedRecords(updateRecords);
      alert("Record submitted successfully!");
     }
    handleReset();

    }


   return (
    <div className="app">

      <Sidebar/>

      <main className="main">
        <h1> Visitor Form</h1>
        <p> fill in the below to Create new Record</p> 
        <form onSubmit={handleSubmit}>
        <Personalinfo
        formData={formData}
        handleChange={handleChange}
        errors = {errors}/>
        <ProfessionalDetail
        formData={formData}
        handleChange={handleChange}
        errors={errors}/>
        <Preference
        formData={formData}
        handleChange={handleChange}
        errors={errors}/>

        </form>

        <div className="form-actions">
          <button type="button" className="reset-btn"
            onClick={handleReset} > Reset</button>

          <button type="button" className="submit-btn"
           onClick={handleSubmit}>
            {editIndex !== null ? "Update Record" : "Submit Record"}
             </button>

             {editIndex !== null && (
                <button 
                type="button"
                className="reset"
                onClick={handleReset}> Cancel Edit </button>
              )}
        </div>
        
        <section className="records-section">
  <h2>Submitted Records</h2>

  {records.length === 0 ? (
    <p>No records submitted yet.</p>
  ) : (
    records.map((record, index) => (
      <div className="record-card" key={index}>
        <h3>Record {index + 1}</h3>

        <p><strong>Name:</strong> {record.fullName}</p>
        <p><strong>Email:</strong> {record.email}</p>
        <p><strong>Phone:</strong> {record.phone}</p>
        <p><strong>Department:</strong> {record.department}</p>
        <p><strong>Experience:</strong> {record.experience} years</p>
        <p><strong>Skills:</strong> {record.skills.join(", ")}</p>
        <p><strong>Contact Methods:</strong> {record.contactMethods.join(", ")}</p>
        <p><strong> Notifications:</strong> {record.notificationsEnabled ? "Enabled" : "Disabled"}</p>
        <p><strong>Additional Notes:</strong> {record.additionalNotes}</p>
        <p><strong>Terms Accepted:</strong> {record.agreeTerms ? "Yes" : "No"}</p>

        <button type="button" className="edit-btn"
        onClick={() => handleEdit(index)}> Edit</button>

        <button 
        type="button" className="delete-btn"
        onClick={() => handleDelete(index)}> Delete</button>
      </div>
    ))
  )}
</section>

       
      </main>
    </div>
  );
}

export default App;
