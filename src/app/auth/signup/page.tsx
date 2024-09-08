"use client";

import { Button, FormInput } from "@/components/shared";
import AuthAssets from "@/lib/assets/auth";
import logos from "@/lib/assets/logos";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, TSignup } from "@/schema/auth/signupSchema";
import { Form, FormField } from "@/components/ui/form";
import { AuthLink } from "@/components/auth";
import { AppRoutes } from "@/utils/routes";
import { errorToast } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { signUp } from "@/services/auth/queries";

const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<TSignup>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (values: TSignup) => {
    setIsLoading(true);
    try {
      await signUp(values);
      setIsLoading(false);
      router.push(AppRoutes.auth.login.path);
    } catch (error: any) {
      setIsLoading(false);
      errorToast(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full flex-1 relative">
      <AuthLink path={AppRoutes.auth.login.path} text="Sign In" />
      <div className="flex flex-col items-center max-w-[328px] w-auto">
        <div className="flex flex-col items-center gap-3 text-center mb-10 ">
          <div className="w-8 h-8">
            <Image src={logos.logo} alt="Umi Logo" />
          </div>
          <h1 className="text-2xl font-geist-semibold">
            <span className="text-grey-200">Let’s </span>get started
          </h1>
          <h3 className="text-[14px] text-grey-100 leading-[18px] font-geist-medium">
            Umi is the leading platform for visual creatives to showcase & build
          </h3>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            className="w-[328px] h-11 font-geist-medium"
            variant="default"
          >
            <div className="w-5 h-auto">
              <Image src={AuthAssets.Google} alt="Google Logo" />
            </div>
            <p>Sign up with Google</p>
          </Button>

          <Form {...form}>
            <form className="" onSubmit={handleSubmit(onSubmit, () => {})}>
              <div className="mb-4 pt-6 mt-4 border-t border-t-grey-300">
                <FormField
                  control={control}
                  name="email"
                  render={({ field: { ref: _ref, ...rest } }) => (
                    <FormInput
                      label="Email Address"
                      error={errors.email}
                      containerClass="mb-4"
                      className="pl-8"
                      lefticon={
                        <div className="w-8 h-8 flex items-center justify-center">
                          <Image src={AuthAssets.User} alt="Umi Logo" />
                        </div>
                      }
                      {...rest}
                    />
                  )}
                />
                <FormField
                  control={control}
                  name="password"
                  render={({ field: { ref: _ref, ...rest } }) => (
                    <FormInput
                      label="Password"
                      error={errors.password}
                      type="password"
                      containerClass=""
                      {...rest}
                    />
                  )}
                />
              </div>

              <Button
                loading={isLoading}
                className="w-[328px] h-11 font-geist-medium bg-[rgba(160,160,160,0.25)]"
                variant="default"
              >
                <div className="w-5 h-auto">
                  <Image src={AuthAssets.Mail} alt="Google Logo" />
                </div>
                <p>Continue with Email</p>
              </Button>
            </form>
          </Form>
        </div>
        <div className="mt-6">
          <p className="text-sm text-grey-100 text-center leading-4 font-geist-regular">
            By signing up you agree to our terms of service and privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
