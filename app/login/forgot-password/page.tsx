"use client";
import { FilledButton } from "@/components/Button";
import { InputFade, PasswordInputFade } from "@/components/Input";
import { LoadButton } from "@/components/Load";
import ResetPassword from "@/components/login/ResetPassword";
import TitleHeaderLogin from "@/components/login/TitleHeaderLogin";
import VerificationCode from "@/components/login/VerificationCode";
import { emailSchema, loginSchema } from "@/schemas";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const isLoading: boolean = false; /* auth.loading; */
  const search = useSearchParams();
  const page = new URLSearchParams(search).get("page");

  const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [isRemembered, setIsRemembeered] = useState<boolean>(false);

  const onSubmit = () => {
    router.push('?page=enter-code')
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: emailSchema,
      onSubmit,
    });

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else setLoading(false);
  }, [isLoading]);

  useEffect(() => {
    if (
      values.email !== "" &&
      !errors.email &&
      loading === false
    ) {
      setFormButtonDisabled(true);
    } else if (loading === true) {
      setFormButtonDisabled(false);
    } else {
      setFormButtonDisabled(false);
    }
  }, [values, errors, loading]);

  return (
    <main className="w-full h-full flex items-center justify-center">
      {/* FORM */}
      <div className="w-full">
        <TitleHeaderLogin title={
            page === 'reset-code' ? "Reset Password" : "Forgot Password?"
        } />
        {!page && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col mt-[60px] gap-4 lg:gap-[60px]"
          >
            <div className="">
              <InputFade
                id="email"
                value={values.email}
                touched={touched.email}
                blur={handleBlur}
                handleChange={handleChange}
                error={errors.email}
                isDisabled={false}
                label="Enter your email address to receive a password reset code"
                type="text"
                placeholder="email@example.com"
              />
            </div>

            <FilledButton
            //   cta={() => router.push("/login/email")}
              text="Sign In With Email"
              // image={require("../../assets/icons/Mail.svg")}
              btnClass="bg-primary hover:bg-secBg"
              pClass="text-textBody"
            >
              {loading === true ? (
                <LoadButton />
              ) : (
                <p className="login-btn-text">Send Verification Code</p>
              )}
            </FilledButton>
          </form>
        )}

        {page === "enter-code" && <VerificationCode />}
        
        {page === "reset-code" && <ResetPassword />}
      </div>
    </main>
  );
};

export default Page;
