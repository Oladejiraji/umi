"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AppRoutes } from "@/utils/routes";
import { useRouter } from "next/navigation";
import { errorToast } from "@/utils/helper";
import AuthAssets from "@/lib/assets/auth";
import { Formik } from "formik";
import { loginSchema, TLogin } from "@/schema/auth/loginSchema";
import { Button, FormInput } from "@/components/shared";
import Link from "next/link";
import { login } from "@/lib/auth";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (values: TLogin) => {
    setIsLoading(true);
    try {
      await login(values);
      setIsLoading(false);
      router.push(AppRoutes.dashboard.home.path);
    } catch (error: any) {
      setIsLoading(false);
      errorToast(error.message);
    }
  };

  return (
    <>
      <div className="flex justify-end">
        <Link href={AppRoutes.auth.signup.path}>
          <div className="flex items-center justify-center gap-2">
            <h3 className="font-geist-regular text-base text-[#9F9F9F]">
              Create Account
            </h3>
            <div>
              <Image alt="Create an account icon" src={AuthAssets.C} />
            </div>
          </div>
        </Link>
      </div>
      <div className="relative flex w-full flex-1 flex-col items-center justify-center gap-16">
        <div>
          <Image src={AuthAssets.Umi} alt="umi logo" />
        </div>
        <div>
          <h1 className="pb-7 text-center font-geist-medium text-xl text-[#5D5D5D]">
            Log In
          </h1>
          <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={loginSchema}
          >
            {(props) => {
              const {
                values,
                handleChange,
                handleBlur,
                handleSubmit,
                errors,
                touched,
              } = props;
              return (
                <form
                  onSubmit={handleSubmit}
                  className="min-w-[300px] rounded-[25px] px-0 py-8 backdrop-blur-[16px] sm:min-w-[434px] sm:px-14 sm:py-14"
                >
                  <div className="pb-3">
                    <FormInput
                      name="email"
                      label="Email"
                      id="email"
                      placeholder="Enter your email address"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                  <div>
                    <FormInput
                      name="password"
                      id="password"
                      type="password"
                      label="Password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                  <div className="pb-4 pt-8">
                    <Button
                      type="submit"
                      className="w-full"
                      loading={isLoading}
                    >
                      <p>Continue</p>
                    </Button>
                  </div>
                  <div>
                    <Link href="#">
                      <p className="text-center font-geist-medium text-base text-[#6D6D6D] underline">
                        I can't remember my password
                      </p>
                    </Link>
                  </div>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
      <div className="flex items-center gap-4 font-geist-medium text-base text-[#494949]">
        <Link href="#">
          <p>Terms of Privacy</p>
        </Link>
        <Link href="#">
          <p>Privacy Policy</p>
        </Link>
      </div>
    </>
  );
};

export default Login;
