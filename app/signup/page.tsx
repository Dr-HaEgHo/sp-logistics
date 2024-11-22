'use client' 
import { FilledButton } from "@/components/Button";
import { InputFade, PasswordInputFade } from "@/components/Input";
import { LoadButton } from "@/components/Load";
import TitleHeaderLogin from "@/components/login/TitleHeaderLogin";
import { loginSchema, signupSchema } from "@/schemas";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { signup } from "@/store/auth/authActions";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import CheckBox from "@/components/CheckBox";
import { clearSignupSuccess } from "@/store/auth/authSlice";

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector((state) => state.auth.loading);
  const signupSuccess = useAppSelector((state) => state.auth.signupSuccess);

  const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [ hasAgreed, setHasAgreed ] = useState<boolean>(false);
  const [ phone, setPhone ] = useState<string>("");
  const [ errorPH, setErrorPH ] = useState<string>("")

  const onSubmit = () => {
    console.log('the login something: ', values)
    dispatch(signup({values, phone}));
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
      validationSchema: signupSchema,
      onSubmit,
    });

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else setLoading(false);
  }, [isLoading]);


  

  useEffect(() => {
    if (signupSuccess === true) {
      router.push(`/login`);
      setTimeout(() => {
        dispatch(clearSignupSuccess());
      }, 800);
    }
  }, [signupSuccess]);

  useEffect(() => {
    if (
      values.firstname === "" ||
      values.lastname === "" ||
      values.email === "" ||
      values.password === "" ||
      errors.firstname ||
      errors.lastname ||
      errors.email ||
      errors.password ||
      loading === true || 
      hasAgreed === false ||
      !phone.length
    ) {
      setFormButtonDisabled(true);
    } else {
      setFormButtonDisabled(false);
    }


    if (phone === "") {
      setErrorPH("This field is required");
    } else if (phone.length < 13) {
      setErrorPH("Invalid: phone number too short");
    } else if (phone.length > 14) {
      setErrorPH("Invalid: phone number too long");
    } else {
      setErrorPH("");
    }

    console.log(phone, hasAgreed)

  }, [values, errors, loading, hasAgreed, phone]);

  return (
    <main className="w-full h-full flex items-center justify-center">
      {/* FORM */}
      <div className="w-full">
        

        {/* <h2 className="text-[26px] mont lg:text-[40px] font-bold text-appBlack mb-6">
          Login
        </h2>
        <p className="font-[500] mont">
        Don't have an account?{" "}
        <a href="/signup" className="text-primary hover:underline ">
          Register Here
        </a>
      </p> */}
      <TitleHeaderLogin
        title="Sign Up to Get Started"
        subtitle="Already have an account?"
        link="Log In"
        route="/login"
      />
        <form onSubmit={handleSubmit} className="flex flex-col mt-[60px] gap-4 lg:gap-6">
          <InputFade
            id="firstname"
            value={values.firstname}
            touched={touched.firstname}
            blur={handleBlur}
            handleChange={handleChange}
            error={errors.firstname}
            isDisabled={false}
            label="First Name"
            type="text"
            placeholder="Enter your first name"
          />

          <InputFade
            id="lastname"
            value={values.lastname}
            touched={touched.lastname}
            blur={handleBlur}
            handleChange={handleChange}
            error={errors.lastname}
            isDisabled={false}
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
          />

          <InputFade
            id="email"
            value={values.email}
            touched={touched.email}
            blur={handleBlur}
            handleChange={handleChange}
            error={errors.email}
            isDisabled={false}
            label="Email"
            type="text"
            placeholder="email@example.com"
          />
          <div>
          <PasswordInputFade
            id="password"
            value={values.password}
            touched={touched.password}
            blur={handleBlur}
            handleChange={handleChange}
            error={errors.password}
            isDisabled={false}
            label="Password"
            placeholder="Enter password"
          />
          <a href="/login/forgot-password" className="text-xs text-right mt-3 mont text-grey900 cursor-pointer hover:underline">
            Forgot Password?
          </a>
          </div>
          
          <div className="w-full flex flex-col input-wrap !p-0">
              <label className="labels">Mobile Number</label>
              <PhoneInput
                country={"sa"}
                placeholder="Enter phone number"
                value={phone}
                onChange={(value) => setPhone(value)}
                searchStyle={{
                  width: "100%",
                  display: "flex",
                  gap: "14px",
                }}
                inputStyle={{
                  width: "100%",
                  height: 40,
                  padding: "10px 70px",
                  border: "1px #888888 solid",
                  background: "none",
                  fontSize: "15px",
                  color: "#333",
                }}
                buttonStyle={{
                  border: "1px #888888 solid",
                  background: "none",
                  padding: "10px ",
                  width: 60,
                }}
              />
              { errorPH && <p className='text-error text-[10px] italic'>{errorPH}</p>}
            </div>

          <div className="w-full flex items-center gap-4">

            <CheckBox checked={hasAgreed} setChecked={setHasAgreed}/>
                
                <span className="text-grey900 mont text-sm font-500">
                  I agree to the <a href="#" className="text-sec700">Privacy Policy</a> and <a href="#" className="text-sec700">Terms of Service</a>
                </span>
              </div>

          <FilledButton
            type="submit"
            text=""
            // image={require("../../assets/icons/Mail.svg")}
            btnClass="bg-primary hover:bg-secBg disabled:bg-disableRed"
            pClass="text-textBody"
            disabled={formButtonDisabled}
          >
            {loading === true ? <LoadButton /> : <p className="text-white">Signup</p>}
          </FilledButton>
          
        </form>
      </div>
      
    </main>
  );
};

export default Page;
