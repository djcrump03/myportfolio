
import { useState } from "react";
import "./contact.scss";
import { useFormik } from "formik";
import * as yup from "yup";
import { FieldContainer, FieldError } from "./ContactStyles";


const validationSchema = yup.object({
  fullName: yup.string().min(3, "Please enter your full name").required("Full name is required!"),
  email: yup.string().email("Please enter a valid email address").required(),
  message: yup.string()
})


export default function Contact() {
  const [message, setMessage] = useState(false);

  const onSubmit = (values) => {
    alert(JSON.stringify(values));


  }

  const formik = useFormik({initialValues:{fullName:"",text:"", email:"", message:"", submit:""},
  validateOnBlur: true,
  onSubmit,
  validationSchema: validationSchema,

});

console.log("error:", formik.errors)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/handshake.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={formik.handleSubmit}>
          <FieldContainer>
          <input name="fullName" 
          placeholder="Full Name" 
          value={formik.values.fullName} 
          onChange={formik.handleChange}
          />
           <FieldError>
             {formik.touched.fullName && formik.errors.fullName
              ? formik.errors.fullName 
              : ""}
              </FieldError>
          </FieldContainer>
          <FieldContainer>
          <input name="email"
          placeholder="Email"
           value={formik.values.email}
           onChange={formik.handleChange}
            />
            <FieldError>
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : ""}
          </FieldError>
          </FieldContainer>
          
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}