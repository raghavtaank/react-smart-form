function Personalinfo({formData, handleChange, errors}){
return(
    <section className="form-section">
        <h2>👤 Personal Information </h2>
        <div className="form-grid">
            <div className="form-group">
            <label > Full Name *</label>
            <input type="text"
            name="fullName" placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleChange}/>
            {errors.fullName && (
                <p className="error-message">{errors.fullName}</p>
            )}
        </div>
        <div className="form-group"> 
            <label> Email Address*</label>
            <input type="email"
            name="email" placeholder="name@example.com"
            value={formData.email}
            onChange={handleChange}/>
            {errors.email && (
                <p className="error-message">{errors.email}</p>
            )}
        </div>

        <div className="form-group">
            <label> Phone Number*</label>
            <input type="tel" 
            name="phone" placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}/>
            {errors.phone && (
                <p className="error-message"> {errors.phone}</p>
            )}
        </div>

        <div className="form-group">
            <label>Age*</label>
            <input type="number"
            name="age" placeholder="Enter Age"
            value={formData.age}
            onChange={handleChange}/>
            {errors.age && (
                <p className="error-message">{errors.age}</p>
            )}
        </div>

        <div className="form-group">
            <label> Date Of Birth*</label>
            <input type="date" name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}/>
            {errors.dateOfBirth && (
                <p className="error-message"> {errors.dateOfBirth}</p>
            )}
        </div>

        <div className="form-group">
            <label> Address*</label>
            <textarea placeholder="Enter Complete Adress" rows="3" name="address"
            value={formData.address}
            onChange={handleChange}/>
            {errors.address && (
                <p className="error-message"> {errors.address}</p>
            )}
        </div>
   </div>
   </section>
);
}
export default Personalinfo;