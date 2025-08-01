import React from 'react'
import * as yup from "yup";
import { useFormik } from "formik";
const SignupSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
    email: yup
        .string()
        .email("Invalid email")
        .required("Email is required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
});

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            console.log('Form data', values);
            // You can send this data to an API here
        },
    });


    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <input type="text" name="name" aria-label='Name' value={formik.values.name} onChange={formik.handleChange}
                    onBlur={formik.handleBlur} placeholder='Name' />
                {formik.touched.name && formik.errors.email && <p
                    className="error">{formik.errors.name}</p>}
                <br />
                <input type="email" name="email" aria-description='enter you email' value={formik.values.email} onChange={formik.handleChange}
                    onBlur={formik.handleBlur} placeholder='Email' />
                {formik.touched.email && formik.errors.email && <p
                    className="error">{formik.errors.email}</p>}
                <br />
                <input
                    type="password"
                    name="password"
                    aria-autocomplete='true'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Password"
                />
                {formik.touched.password && formik.errors.password && <p
                    className="error">{formik.errors.password}</p>}
                <br /><button type="submit">Log In</button>
            </form>
        </>
    )
}

export default SignupForm

