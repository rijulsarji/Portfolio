import "../CSS/Pages CSS/Form.css";
import { motion } from "framer-motion";
import RS from "../Images/About Me Logos/RS.png";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { useEffect } from "react";
import * as emailjs from "emailjs-com";

function Form() {
  document.title = "Rijul Sarji | Project Planner";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formik = useFormik({
    initialValues: {
      from_name: "",
      // to_name: process.env.rijulsarji,
      email: "",
      type: "",
    },
  });

  function handleSubmit(event) {
    emailjs
      .sendForm(
        "service_oz8ddvc",
        "template_o18zuv9",
        event.target,
        "user_9vUgE9mC9SVwOzn5Rerv6"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    alert("Your email has been sent");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="formBody"
    >
      <Link to="/" className="formIconContainer">
        <IoMdArrowBack className="formIcon" />
      </Link>
      <img src={RS} className="formLogo" alt="logo" />

      <div className="formContainer">
        <h1>I'm excited to know about your new project. Let's get started.</h1>

        <form onSubmit={handleSubmit} className="formInputContainer">
          {/* input of name */}
          <div className="formInput">
            <label htmlFor="name" id="nameHead">
              Name
            </label>
            <input
              type="text"
              id="name"
              required={true}
              name="from_name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>

          {/* input of email */}
          <div className="formInput">
            <label htmlFor="email" id="emailHead">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              required={true}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>

          {/* Dropdown of type */}
          <div className="formInput">
            <label htmlFor="type">Type of Project</label>
            <select
              id="type"
              name="type"
              required={true}
              value={formik.values.type}
              onChange={formik.handleChange}
            >
              <option value="" className="typeDrop">
                Choose...
              </option>
              <option value="Web App" className="typeDrop">
                Web App
              </option>
              <option value="Mobile App" className="typeDrop">
                Mobile App
              </option>
              <option value="Prototype Designing" className="typeDrop">
                Prototype Designing
              </option>
            </select>
          </div>

          {/* input for description */}
          <div className="formInput">
            <label htmlFor="description">
              A short description about your idea
            </label>
            <textarea
              id="description"
              name="description"
              required={true}
              value={formik.values.description}
              onChange={formik.handleChange}
            />
          </div>

          <div className="formButtons">
            {/* submit button */}
            <button className="formSubmit" type="submit">
              Submit
            </button>
            <button
              className="formReset"
              type="reset"
              onClick={() => {
                formik.resetForm();
                formik.setFieldValue("description", "");
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}

export default Form;
