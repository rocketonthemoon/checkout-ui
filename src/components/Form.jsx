function Form() {
  return (
    <form>
      <main>
        <h2>Contact information</h2>
        <div className="input-field">
          <label htmlFor="email">E-mail</label>
          <span className="material-icons">mail</span>
          <input type="text" id="email" placeholder="Enter your email..." />
        </div>
        <div className="input-field">
          <label htmlFor="phone">Phone</label>
          <span className="material-icons">phone</span>
          <input type="number" id="phone" placeholder="Enter your phone..." />
        </div>
      </main>
      <main>
        <h2>Shipping address</h2>
        <div className="input-field">
          <label htmlFor="name">Full name</label>
          <span className="material-icons">account_circle</span>
          <input type="text" id="name" placeholder="Your name.." />
        </div>
        <div className="input-field">
          <label htmlFor="address">Address</label>
          <span className="material-icons">home</span>
          <input type="text" id="address" placeholder="Your address.." />
        </div>
        <div className="input-field">
          <label htmlFor="city">City</label>
          <span className="material-icons">location_city</span>
          <input type="text" id="city" placeholder="Your city.." />
        </div>
        <div className="input-group">
          <div className="input-field select-container">
            <label htmlFor="country">Country</label>
            <span className="material-icons">public</span>
            <div className="arrow-box">
              <div className="arrow-head"></div>
            </div>
            <select id="country">
              <option defaultValue="Your country.." disabled>
                Your country..
              </option>
              <option value="india">india</option>
              <option value="us">united states</option>
              <option value="uk">united kingdom</option>
            </select>
          </div>
          <div className="input-field">
            <label htmlFor="post-code">Postal code</label>
            <span className="material-icons">markunread_mailbox</span>
            <input
              type="number"
              id="post-code"
              placeholder="Your postal code.."
            />
          </div>
        </div>
      </main>
      <div className="save">
        <input type="checkbox" id="save-box" />
        <span>Save this information for the next time</span>
      </div>
      <div className="button">
        <input type="submit" value="Continue" />
      </div>
    </form>
  );
}

export default Form;
