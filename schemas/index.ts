import * as yup from 'yup';



const passwordRules = /^(?=.*\d)(?=.*[a-z]).{5,}$/

export const signupSchema = yup.object().shape({
    firstname: yup.string().required('Required'),
    lastname: yup.string().required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"), 
    password: yup
        .string()
        .min(8)
        .matches(passwordRules, { message: "Passwords must contain atleast one lowercase letter and one number" })
        .required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), undefined], "Passwords must match")
        .required("Required")
});

export const emailSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"), 
});

export const ResetPasswordSchema = yup.object().shape({
    newPassword: yup
        .string()
        .min(8)
        .matches(passwordRules, { message: "Passwords must contain atleast one lowercase letter and one number" })
        .required("Required"),
    confirmNewPassword: yup
        .string()
        .oneOf([yup.ref('newPassword'), undefined], "Passwords must match")
        .required("Required")
});

export const securitySchema = yup.object().shape({
    password: yup
        .string()
        .min(8)
        .matches(passwordRules, { message: "Passwords must contain atleast one lowercase letter and one number" })
        .required("Required"),
    newPassword: yup
        .string()
        .min(8)
        .matches(passwordRules, { message: "Passwords must contain atleast one lowercase letter and one number" })
        .required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('newPassword'), undefined], "Passwords must match")
        .required("Required")
});

export const profileSchema = yup.object().shape({
    firstname: yup.string().required('Required'),
    lastname: yup.string().required("Required"),
    username: yup.string().required("Required"),
    // phoneNumber: yup
    // .number()
    // .min(11)
    // // .matches()
    // .positive()
    // .integer()
    // .required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required")
});

export const loginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"), 
    password: yup
        .string()
        .min(8)
        .matches(passwordRules, { message: "Passwords must contain atleast one lowercase letter and one number" })
        .required("Required"),
});