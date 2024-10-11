"use client";

import React, { useEffect } from "react";
import { Formik } from "formik";

import { infoSchema, TInfo } from "@/schema/auth/infoSchema";
import { useRouter, useSearchParams } from "next/navigation";
import { AppRoutes } from "@/utils/routes";
import { useUpdateUserInfo } from "@/services/user/queries";
import InfoForm from "@/components/auth/InfoForm";

const initialValues = {
  full_name: "",
  profession: "",
  use_app_for: "",
};

const stepOptions = [1, 2, 3];

const Info = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { mutate, isPending } = useUpdateUserInfo();
  const step = parseInt(searchParams.get("step") || "");

  useEffect(() => {
    if (!step || !stepOptions.includes(step)) {
      router.push(`${AppRoutes.auth.info.path}?step=1`);
    }
  }, []);

  const onSubmit = async (values: TInfo) => {
    mutate(values);
  };

  return (
    <div className="relative flex w-full flex-1 flex-col items-center justify-center gap-16">
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={infoSchema}
      >
        {(props) => {
          const { values } = props;
          if (!values["full_name"] && step > 1) {
            setTimeout(() => {
              router.push(`${AppRoutes.auth.info.path}?step=1`);
            }, 500);
          }
          return (
            <InfoForm isPending={isPending} step={step} formikProps={props} />
          );
        }}
      </Formik>
    </div>
  );
};

export default Info;
