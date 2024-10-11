import React, { useEffect, useRef } from "react";
import { Button, FormInput } from "../shared";
import { TInfo } from "@/schema/auth/infoSchema";
import { motion } from "framer-motion";
import { FormikProps } from "formik";
import Image from "next/image";
import { checkErrorManually } from "@/utils/helper";
import { AppRoutes } from "@/utils/routes";
import AuthAssets from "@/lib/assets/auth";
import PanelSelect from "./PanelSelect";
import { ProfessionOptions, UmiUsageOptions } from "@/utils/static";
import { useRouter } from "next/navigation";

interface IProps {
  step: number;
  formikProps: FormikProps<TInfo>;
  isPending: boolean;
}

const InfoForm = (props: IProps) => {
  const {
    formikProps: {
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      errors,
      touched,
      setFieldValue,
    },
    step,
    isPending,
  } = props;
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      const page1Error = checkErrorManually(
        errors,
        touched,
        values,
        "full_name",
      );
      const page2Error = checkErrorManually(
        errors,
        touched,
        values,
        "profession",
      );
      const page3Error = checkErrorManually(
        errors,
        touched,
        values,
        "use_app_for",
      );
      if (step === 1 && !page1Error) {
        router.push(`${AppRoutes.auth.info.path}?step=2`);
      }
      if (step === 2 && !page2Error) {
        router.push(`${AppRoutes.auth.info.path}?step=3`);
      }
      if (step === 3 && !page3Error) {
        formRef.current?.submit();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [errors, values, touched, step]);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="min-w-[300px] rounded-[25px] px-0 py-8 backdrop-blur-[16px] sm:min-w-[434px] sm:px-14 sm:py-14"
    >
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="">
            <h1 className="pb-8 text-center font-geist-medium text-xl text-white">
              What’s your full name?
            </h1>
            <FormInput
              name="full_name"
              id="full_name"
              className="h-[48px]"
              value={values.full_name}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={errors}
              touched={touched}
              validate={false}
              focusOnMount
            />
          </div>
          <div className="flex justify-center pt-8">
            <Button
              type="button"
              className="h-12 w-12 rounded-full"
              onClick={() => router.push(`${AppRoutes.auth.info.path}?step=2`)}
              disabled={checkErrorManually(
                errors,
                touched,
                values,
                "full_name",
              )}
            >
              <div>
                <Image src={AuthAssets.Right} alt="right icon" />
              </div>
            </Button>
          </div>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="">
            <h1 className="pb-8 text-center font-geist-medium text-xl text-white">
              What is your profession
            </h1>
            <PanelSelect
              options={ProfessionOptions}
              value={values["profession"]}
              onChange={(val: string) => setFieldValue("profession", val)}
            />
          </div>
          <div className="flex justify-center pt-8">
            <Button
              type="button"
              className="h-12 w-12 rounded-full"
              onClick={() => router.push(`${AppRoutes.auth.info.path}?step=3`)}
              disabled={checkErrorManually(
                errors,
                touched,
                values,
                "profession",
              )}
            >
              <div>
                <Image src={AuthAssets.Right} alt="right icon" />
              </div>
            </Button>
          </div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="">
            <h1 className="pb-8 text-center font-geist-medium text-xl text-white">
              What will you be using Umi for?
            </h1>
            <PanelSelect
              options={UmiUsageOptions}
              value={values["use_app_for"]}
              onChange={(val: string) => setFieldValue("use_app_for", val)}
            />
          </div>
          <div className="flex justify-center pt-8">
            <Button
              type="submit"
              className="h-12 w-12 rounded-full"
              loading={isPending}
            >
              <div>
                <Image src={AuthAssets.Right} alt="right icon" />
              </div>
            </Button>
          </div>
        </motion.div>
      )}
    </form>
  );
};

export default InfoForm;
