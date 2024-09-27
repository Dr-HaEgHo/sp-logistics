'use client'
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { PasswordInputFade } from "../Input";
import { ResetPasswordSchema } from "@/schemas";
import { FilledButton } from "../Button";
import { LoadButton } from "../Load";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const router = useRouter();
  const isLoading: boolean = false; /* auth.loading; */

  const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [isRemembered, setIsRemembeered] = useState<boolean>(false);

  const onSubmit = () => {
    router.push("?page=enter-code");
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        newPassword: "",
        confirmNewPassword:""
      },
      validationSchema: ResetPasswordSchema,
      onSubmit,
    });

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else setLoading(false);
  }, [isLoading]);

  useEffect(() => {
    if (values.newPassword !== "" &&
         !errors.newPassword && 
          values.confirmNewPassword !== "" &&
         !errors.confirmNewPassword && 
         loading === false) {
      setFormButtonDisabled(true);
    } else if (loading === true) {
      setFormButtonDisabled(false);
    } else {
      setFormButtonDisabled(false);
    }
  }, [values, errors, loading]);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-[60px] gap-4 lg:gap-4"
      >
        <div>
          <PasswordInputFade
            id="newPassword"
            value={values.newPassword}
            touched={touched.newPassword}
            blur={handleBlur}
            handleChange={handleChange}
            error={errors.newPassword}
            isDisabled={false}
            label="Password"
            placeholder="Enter New Password"
          />
        </div>
        <div>
          <PasswordInputFade
            id="confirmNewPassword"
            value={values.confirmNewPassword}
            touched={touched.confirmNewPassword}
            blur={handleBlur}
            handleChange={handleChange}
            error={errors.confirmNewPassword}
            isDisabled={false}
            label="Password"
            placeholder="Confirm New Password"
          />
        </div>

        <FilledButton
          //   cta={() => router.push("/login/email")}
          text="Sign In With Email"
          // image={require("../../assets/icons/Mail.svg")}
          btnClass="bg-primary hover:bg-secBg mt-2"
          pClass=""
        >
          {loading === true ? (
            <LoadButton />
          ) : (
            <p className="login-btn-text">Update Password</p>
          )}
        </FilledButton>
      </form>
    </div>
  );
};

export default ResetPassword;
