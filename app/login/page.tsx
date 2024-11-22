'use client' 
import { FilledButton } from "@/components/Button";
import { InputFade, PasswordInputFade } from "@/components/Input";
import { LoadButton } from "@/components/Load";
import TitleHeaderLogin from "@/components/login/TitleHeaderLogin";
import { loginSchema } from "@/schemas";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { login } from "@/store/auth/authActions";

const Page = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector((state) => state.auth.loading);
  const token = useAppSelector((state) => state.auth.userToken);

  const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [ isRemembered, setIsRemembered ] = useState<boolean>(false);

  const onSubmit = () => {
    console.log('the login something: ', values)
    dispatch(login(values));
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else setLoading(false);
  }, [isLoading]);

  useEffect(() => {
    if(!token){
      return;
    }

    router.push('/dashboard/clearance');
    console.log('the token: ', token)
  }, [token])

  useEffect(() => {
    if (
      values.email === "" ||
      values.password === "" ||
      errors.email ||
      errors.password ||
      loading === true
    ) {
      setFormButtonDisabled(true);
    } else {
      setFormButtonDisabled(false);
    }
  }, [values, errors, loading]);

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
        title="Login"
        subtitle="Don't have an account?"
        link="Register Here"
        route="/signup"
      />
        <form onSubmit={handleSubmit} className="flex flex-col mt-[60px] gap-4 lg:gap-6">
          <div>
          <InputFade
            id="email"
            value={values.email}
            touched={touched.email}
            blur={handleBlur}
            handleChange={handleChange}
            error={errors.email}
            isDisabled={false}
            label="Username"
            type="text"
            placeholder="email@example.com"
          />
          <a href="/login/forgot-username" className="mont font-[500] text-grey900 text-xs mt-3 text-right cursor-pointer hover:underline">Forgot Username</a>
          </div>
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
          

          <div className="w-full flex items-center gap-4">
                <div className="cursor-pointer flex item-center justify-center" onClick={() => setIsRemembered(!isRemembered)}>
                  {isRemembered ? (
                    <Image
                      src={require("../../assets/icons/check.svg")}
                      alt="unchecked"
                      className="w-5 h-5 object-cover"
                    />
                  ) : (
                    <Image
                      src={require("../../assets/icons/checkbox.svg")}
                      alt="unchecked"
                      className="w-5 h-5 object-cover p-[1px]"
                    />
                  )}
                </div>
                <p className="text-grey900 mont text-sm font-500">
                  Remember me
                </p>
              </div>

          <FilledButton
            type="submit"
            text=""
            // image={require("../../assets/icons/Mail.svg")}
            btnClass="bg-primary hover:bg-secBg disabled:bg-disableRed"
            pClass="text-textBody"
            disabled={formButtonDisabled}
          >
            {loading === true ? <LoadButton /> : <p className="text-white">Login</p>}
          </FilledButton>
          
        </form>
      </div>
      
    </main>
  );
};

export default Page;
