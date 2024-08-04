import * as yup from "yup";

export const userSchema = yup.object().shape({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string()
        .min(6, "Password must be at least 6 characters long")
        .required("Password is required"),
});