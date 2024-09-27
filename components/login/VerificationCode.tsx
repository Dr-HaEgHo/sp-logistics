import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { InputFade } from "../Input";
import { FilledButton } from "../Button";
import { LoadButton } from "../Load";
import { useRouter } from "next/navigation";
import { emailSchema } from "@/schemas";
import PinInput from "react-pin-input";

const VerificationCode = () => {
  const router = useRouter();

  const isLoading: boolean = false;

  const [formButtonDisabled, setFormButtonDisabled] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [isRemembered, setIsRemembeered] = useState<boolean>(false);
  const [values, setValues] = useState<string[]>([]);

  let pinInputRef: PinInput | null | void;

  const handleSubmit = () => {
    
  };

  

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    } else setLoading(false);
  }, [isLoading]);

//   useEffect(() => {
//     if (values.email !== "" && !errors.email && loading === false) {
//       setFormButtonDisabled(true);
//     } else if (loading === true) {
//       setFormButtonDisabled(false);
//     } else {
//       setFormButtonDisabled(false);
//     }
//   }, [values, errors, loading]);

  return (
    <div
      className="flex flex-col mt-[60px] gap-4 lg:gap-[60px]"
    >
      <div className="">
        <label className="text-base font-normal text-grey1000 mb-3">Enter the 6-Digit code sent to your email to continue.</label>
        <PinInput
          length={6}
          initialValue=""
          secret
          secretDelay={100}
          onChange={(value, index) => {
            setValues(value.split(""));
          }}
          type="numeric"
          inputMode="number"
          style={{
            gap: 8,
          }}
          inputStyle={{
            borderColor: "#B0B0B0",
            backgroundColor: "#fff",
            borderRadius: 4,
            minWidth: 8,
            width: 40,
            height: 40,
            marginTop: 12
          }}
          inputFocusStyle={{ borderColor: "#888888" }}
          onComplete={(value, index) => {
            setFormButtonDisabled(true);
          }}
          autoSelect={true}
          regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          // ref={(n) => (pinInputRef = n)}
        />
        <p className="text-sec600 mont font-[500] text-sm mt-5 hover:underline cursor-pointer">Resend Code</p>
      </div>

      <FilledButton
        cta={() => router.push('?page=reset-code')}
        text="Sign In With Email"
        // image={require("../../assets/icons/Mail.svg")}
        btnClass="bg-primary hover:bg-secBg"
        pClass="text-textBody"
      >
        {loading === true ? (
          <LoadButton />
        ) : (
          <p className="login-btn-text">Next</p>
        )}
      </FilledButton>
    </div>
  );
};

export default VerificationCode;
