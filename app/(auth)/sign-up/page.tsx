"use client";

import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "US",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<SignUpFormData> = async (
    data: SignUpFormData,
  ) => {
    try {
      // Simulate API call
      console.log("Submitting sign-up form data:", data);
      // In a real app, this would be an API call to your backend
      // const response = await fetch('/api/signup', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
    } catch (error) {
      console.error("Error submitting sign-up form:", error);
    }
  };
  return (
    <>
      <h1 className="form-title">Sign Up & personalize</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="fullName"
          label="Full Name"
          placeholder="John Doe"
          register={register}
          error={errors.fullName}
          validation={{ required: "Full name is required", minLength: 2 }}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting
            ? "Creating Account..."
            : "Start your investment journey"}
        </Button>
      </form>
    </>
  );
}
