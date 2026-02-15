"use client";

import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  fullName: string;
  phone: string;
  email: string;
  services: string;
  message: string;
};

type EmailFormProps = {
  className?: string;
};

const EmailForm = ({ className = "" }: EmailFormProps) => {
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (_, event) => {
    const myForm = event?.target;
    const formData = new FormData(myForm as HTMLFormElement);

    const res = await fetch("/forms2.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      body: new URLSearchParams(formData as any).toString(),
    });

    if (res.status === 200) {
      toast.success("Your message has been sent.");
      reset();
    } else {
      toast.error("Oops! there was a error sending the form");
    }
  };

  return (
    <form
      className={className}
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="grid grid-cols-1 lg:grid-cols-2 bg-brand gap-2">
        <div className="w-full">
          <input
            className="block w-full  border rounded shadow py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-white text-black"
            id="fullName"
            placeholder="Full Name"
            type="text"
            {...register("fullName")}
          />
        </div>

        <div className="w-full">
          <input
            className="block w-full  border rounded shadow py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-white text-black"
            id="phone"
            placeholder="Phone"
            type="text"
            {...register("phone")}
          />
        </div>

        <div className="w-full">
          <input
            className="block w-full  border rounded shadow py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-white text-black"
            id="email"
            placeholder="Email Adress"
            type="email"
            {...register("email")}
          />
        </div>

        <div className="w-full">
          <select
            id="services"
            className="block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-white text-gray-500 shadow"
            defaultValue=""
            {...register("services")}
          >
            <option value="" disabled>
              Services
            </option>
            <option value="tax-planning">Tax Planning</option>
            <option value="bookkeeping">Bookkeeping</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="lg:col-span-2">
          <textarea
            className=" block w-full   border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white bg-white text-black shadow"
            placeholder="Message"
            id="message"
            rows={5}
            {...register("message")}
          ></textarea>
        </div>
      </div>

      <button
        className="hover:cursor-pointer w-full bg-brand-secondary rounded-md inline-block px-4 py-3 text-sm text-white hover:scale-105 transition hover:shadow-lg"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default EmailForm;
