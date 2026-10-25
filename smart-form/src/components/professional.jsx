 function ProfessionalDetail({formData,handleChange,errors}) {
  return (
    <section className="form-section">
        <h2> Professional Details</h2>

        <div className="form-grid">
            <div className="form-group">
                <label>Department*</label>
                <select name="department" 
                 value={formData.department}
                 onChange={handleChange}
               
                 >
                    <option value="" disabled> Select Department</option>
                    <option value="IT"> IT</option>
                    <option value="HR"> HR</option>
                     <option value="Finance"> Finance</option>
                     <option value="Marketing"> Marketing</option>
                      <option value="Operations">Operations</option>
                       </select>
                        {errors.department && (
                        <p className="error-message">{errors.department}</p>
                    )}

                       </div>

                      {/* experience */}
                      <div className="form-group">
                        <label> Experience (years)*</label>
                        <input type="number" name="experience"
                        value={formData.experience}
                        onChange={handleChange} min="0" placeholder="Enter experience"/>
                        {errors.experience  && (
                            <p className="error-message"> {errors.experience}</p>
                        )} 
                      </div>

                      <div className="form-group">
                        <label> Joining Date *</label>
                        <input type="date"
                        name="joiningDate"
                        value={formData.joiningDate}
                        onChange={handleChange}/>
                        { errors.joiningDate && (
                            <p className="error-message"> {errors.joiningDate}</p>
                        )}
                      </div>
            </div>
            {/* skills */}
            <div className="form-group Skills-group">
                <label> Skills (Select Multiple)*</label>
                <div className="choice">
                    <label>
                        <input type="checkbox" name="skills"
                        value="HTML" checked={formData.skills.includes("HTML")}
                        onChange={handleChange} />HTML
                    </label>
                    <label>
                        <input type="checkbox" name="skills"
                        value="CSS" checked={formData.skills.includes("CSS")}
                        onChange={handleChange} /> CSS
                    </label>

                    <label>
                        <input type="checkbox" name="skills"
                        value="javaScript" checked={formData.skills.includes("javaScript")}
                        onChange={handleChange} />JavaScript
                    </label>

                    <label>
                        <input type="checkbox" name="skills"
                        value="React" checked={formData.skills.includes("React")}
                        onChange={handleChange} />React
                    </label>

                    <label>
                        <input type="checkbox" name="skills"
                        value="Node.js" checked={formData.skills.includes("Node.js")}
                        onChange={handleChange} />Node.js
                    </label>
                </div>

                {errors.skills && (
                    <p className="error-message"> {errors.skills}</p>
                )}
            </div>

            {/* employment type */}
            <div className="form-group employement-group">
                <label> Employment Type*</label>
                <div className="choice">
                    <label> <input type="radio" name="employmentType" value="Full-Time"checked={formData.employmentType === "Full-Time"}
                    onChange={handleChange}
                     /> Full-Time</label>
                    <label> <input type="radio" name="employmentType" value="Part-Time" checked={formData.employmentType === "Part-Time"}
                    onChange={handleChange} /> Part-Time</label>
                      <label> <input type="radio" name="employmentType" value="Internship"
                      checked={formData.employmentType === "Internship"} onChange={handleChange}/>internship</label>
                      {errors.employmentType && (
                        <p className="error-message">{errors.employmentType}</p>
                      )}
                </div>
            </div>

        
    </section>
  );
}

export default ProfessionalDetail;
