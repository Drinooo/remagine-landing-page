import { Typography } from "@material-tailwind/react";
import React from "react";

export const CTA1 = () => {
  return (
    <section className="border-b-2 border-black">
      <div className="gap-8 items-center mx-auto max-w-full xl:gap-16 md:grid md:grid-cols-2">
        <img
          className="w-full"
          src="/images/Illustration 3.png"
          alt="dashboard image"
        />
        <div className="pr-[64px]">
          <Typography className="mb-4 text-h2 tracking-tight font-main font-[700]">
            Generate web design concepts in seconds
          </Typography>
          <Typography className="mb-6 font-main font-[400] text-body">
            Remagine's AI-powered platform lets web designers create beautiful
            design concepts quickly and easily. With Remagine, you can transform
            natural language prompts into high-fidelity designs without any
            extra effort.
          </Typography>
        </div>
      </div>
    </section>
  );
};
