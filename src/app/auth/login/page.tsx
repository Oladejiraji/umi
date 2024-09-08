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
import { useRouter } from "next/navigation";
import { errorToast } from "@/utils/helper";
import { signIn } from "@/services/auth/queries";

const Login = () => {
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
      await signIn(values);
      setIsLoading(false);
      router.push(AppRoutes.dashboard.home.create.path);
    } catch (error: any) {
      setIsLoading(false);
      errorToast(error.message);
    }
  };

  return (
    <div className="relative flex w-full flex-1 items-center justify-center">
      <AuthLink path={AppRoutes.auth.signup.path} text="Sign Up" />
      <div className="flex w-auto max-w-[328px] flex-col items-center">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="h-8 w-8">
            <Image src={logos.logo} alt="Umi Logo" />
          </div>
          <h1 className="font-geist-semibold text-2xl">Your email address</h1>
        </div>
        <div className="flex flex-col gap-2">
          <Form {...form}>
            <form className="" onSubmit={handleSubmit(onSubmit, () => {})}>
              <div className="mb-4 mt-8">
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
                        <div className="flex h-8 w-8 items-center justify-center">
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
                className="h-11 w-[328px] bg-grey-500 font-geist-medium"
                variant="default"
              >
                <p>Sign In</p>
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
