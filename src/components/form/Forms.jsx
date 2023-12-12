import "./forms.css";
const Forms = () => {
  return (
    <div className="main_contact_us_page">
      <div className="main_form_container">
        <div className="google_map">
          <img
            src="google-map.jpg"
            alt="google-map"
            className="google_map_image"
          />
        </div>
        <div className="form-container">
          <h2 className="form_heading">Book Your Table Now</h2>
          <div className="form_content_holder">
            <form className="form">
              <input placeholder="First Name" type="text" name="name" />
              <input placeholder="Last Name" type="text" name="surname" />
              <input placeholder="Contact Number" type="number" name="phone" />
              <input placeholder="Address" type="text" name="address" />
              <input type="date" placeholder="Contact Number" />
              <input type="time" name="time" id="time" />
              <input
                type="number"
                name="people"
                id="people"
                placeholder="Number of guest"
              />
              <select
                className="form_input_field"
                name="select"
                style={{ width: "49.5%" }}
              >
                <option value="$100 - $500"></option>
                <option value="$500 - $1000"></option>
                <option value="$1000 - $1500"></option>
              </select>
              <textarea type="text" placeholder="Your Message here" />
              <div className="form_button_holder">
                <button className="form-button">Send Message </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
