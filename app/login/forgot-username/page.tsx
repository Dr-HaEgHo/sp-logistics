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
    router.push("?page=enter-code");
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
    if (values.email !== "" && !errors.email && loading === false) {
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
        <TitleHeaderLogin
          title="Forgot Username?"
        />

        <p className="text-grey1000">
          Please contact your <span className="font-[500] text-sec600 cursor-pointer hover:underline active:no-underline">Supervisor</span> <br />
          to retrieve your username.
        </p>
      </div>
    </main>
  );
};

export default Page;
