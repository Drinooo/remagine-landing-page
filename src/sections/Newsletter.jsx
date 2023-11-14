import { Typography } from "@material-tailwind/react";
import React from "react";
import { AccessButton } from "../components/Button";

export const Newsletter = () => {
  return (
    <section className="border-b-2 border-black">
      <div className="gap-8 items-center mx-auto max-w-full xl:gap-16 md:grid md:grid-cols-2">
        <div className="pl-[64px]">
          <Typography className="mb-4 text-h2 tracking-tight font-main font-[700]">
            Sign up for early access
          </Typography>
          <Typography className="mb-6 font-main font-[400] text-body">
            Design beautiful websites with Remagine
          </Typography>
          <div className="mb-6 flex-row md:mb-0 md:flex">
            <div
              class="relative mb-3 w-full md:mr-3 md:mb-0 xl:w-96"
              data-te-input-wrapper-init
            >
              <input
                type="text"
                id="email"
                className="p-[14px] w-full border-2 border-black font-main font-[400]"
                placeholder="Sign up now"
                required
              />
            </div>
            <AccessButton className="bg-green rounded-none border-2 border-black normal-case font-main font-[500] text-black shadow-none">
              Get Early Access
            </AccessButton>
          </div>
        </div>
        <img
          className="w-full"
          src="/images/Illustration 4.png"
          alt="dashboard image"
        />
      </div>
    </section>
  );
};
