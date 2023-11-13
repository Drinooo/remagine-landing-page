import { Input, Typography } from "@material-tailwind/react";
import { SITEMAP } from "../utils/data";
import { AccessButton } from "../components/Button";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-full">
        <div className="mx-auto flex justify-between max-w-full py-12 px-[64px]">
          <div className="max-w-full">
            <Typography variant="small" className="mb-4 font-bold uppercase">
              <img src="/logo/Remagine.png" alt="" />
            </Typography>
            <div className="flex flex-wrap gap-[32px]">
              {SITEMAP.map((item) => (
                <Typography className="font-main font-[400]">
                  <a
                    href="#"
                    className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                  >
                    {item.label}
                  </a>
                </Typography>
              ))}
            </div>
          </div>
          <div className="max-w-full space-y-[16px]">
            <Typography
              variant="small"
              className="mb-4 font-bold uppercase font-main"
            >
              Newsletter
            </Typography>
            <div class="mb-6 flex-row md:mb-0 md:flex">
              <div
                class="relative mb-3 w-full md:mr-3 md:mb-0 xl:w-96"
                data-te-input-wrapper-init
              >
                <input
                  type="text"
                  id="email"
                  className="p-[14px] w-full border-2 border-black font-main font-[400]"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <AccessButton className="bg-green rounded-none border-2 border-black normal-case font-main font-[500] text-black shadow-none">
                Submit
              </AccessButton>
            </div>
            <Typography className="font-main font-[400]">
              By subscribing you agree to our Privacy Policy
            </Typography>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t-2 border-black py-4 md:flex-row md:justify-between">
          <div className="flex gap-4 text-black sm:justify-center pl-[64px]">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 font-main underline"
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 font-main underline"
            >
              Terms of Services
            </Typography>
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 font-main underline"
            >
              Cookies Settings
            </Typography>
          </div>
          <div className="pr-[64px]">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 font-main"
            >
              &copy; {currentYear} <a href="#">Remagine</a>. All Rights
              Reserved.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
