import { Typography } from "@material-tailwind/react";
import React from "react";
import { AccessButton } from "../components/Button";

export const Hero = () => {
  return (
    <section className="max-w-full border-b-2 border-black">
      <div className="grid mx-auto pl-[64px] lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7 space-y-[38px]">
          <Typography className="text-h1 font-main font-[700] mb-4 tracking-tight leading-none">
            Text to Web Design Magic
          </Typography>
          <Typography className="mb-6 font-[400] font-main text-body lg:mb-8">
            Remagine generates beautiful, editable web designs from a simple
            text description.
          </Typography>
          <div className="max-w-full space-y-[16px]">
            <div className="mb-6 flex-row md:mb-0 md:flex">
              <div
                class="relative mb-3 w-full md:mr-3 md:mb-0 xl:w-96"
                data-te-input-wrapper-init
              >
                <input
                  type="text"
                  id="email"
                  className="p-[14px] w-full border-2 border-black font-main font-[400]"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <AccessButton className="bg-green rounded-none border-2 border-black normal-case font-main font-[500] text-black shadow-none">
                Get Early Access
              </AccessButton>
            </div>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex border-l-2 border-black">
          <img src="/images/Illustration 2.png" alt="Illustration 2" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};
