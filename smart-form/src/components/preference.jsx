function Preference({formData,handleChange,errors}){
 return(
    <section className="form-section">
        <h2>⚙️ Preference</h2>
        <div className="form-group">
            <label> Preferred Contact Methods*</label>
            <div className="choice">
             
                <label>
                    <input type="checkbox" 
                    name="contactMethods"
                     value="email"
                      checked={formData.contactMethods.includes("email")}
                      onChange={handleChange}/> Email
                </label>

                <label>
                    <input type="checkbox" 
                     name="contactMethods"
                     value="phone"  
                     checked={formData.contactMethods.includes("phone")}
                     onChange={handleChange}/> Phone
                </label>

                <label> 
                    <input type="checkbox"  name="contactMethods" value="whatsapp"
                    checked={formData.contactMethods.includes("whatsapp")}
                     onChange={handleChange}/> Whatsapp
                </label>

                <label >
                    <input type="checkbox"  name="contactMethods" value="other"
                    checked={formData.contactMethods.includes("other")}
                     onChange={handleChange}/> Other
                </label>
            </div>
            {errors.contactMethods && (
              <p className="error-message"> {errors.contactMethods}</p>
            )}
        </div>

        <div className="preference-row">
        <div>
          <h3>Notification preference</h3>
          <p>Receive important updates and notifications about your records..</p>
        </div>

        <label className="switch">
          <input type="checkbox"
          name="notificationsEnabled"
          checked={formData.notificationsEnabled}
          onChange={handleChange} />
          <span className="slider"></span>
        </label>
      </div>

      {/* Additional Notes */}
      <div className="form-group">
        <label>Additional Notes</label>

        <textarea
          rows="4" name="additionalNotes"
          placeholder="Enter any additional information..."
          value={formData.additionalNotes}
          onChange={handleChange}/>
      </div>

      {/* Terms and Conditions */}
      <div className="terms-box">
        <label>
          <input type="checkbox"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={handleChange} />
          I agree to the Terms and Conditions*
        </label>
        {errors.agreeTerms && (
          <p className="error-message"> {errors.agreeTerms}</p>
        )}
        </div>
    </section>
 );  
}

 export default Preference;
  