import { Link } from "react-router-dom";

export default function Register() {
  
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo"> MyChatApp </span>
        <span className="title"> Register </span>
        <form>
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="your email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img
              src="https://cdn.icon-icons.com/icons2/564/PNG/512/Add_Image_icon-icons.com_54218.png"
              alt="Avatar Image"
            />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Already have an account? <Link className="link" to="/login"> Log In Here </Link></p>
      </div>
    </div>
  );
}
