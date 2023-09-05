/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

import UserAuthForm from "@/components/user-auth-form";

import backgroundImg from "@/assets/images/beautiful-woman-new-york-1.png";
import Logo from "@/assets/icons/mtn-logo.svg";

const Login = () => {
  return (
    <div className="h-screen lg:flex lg:py-6 lg:px-6">
      <div className=" flex flex-col justify-center gap-8  basis-1/2 h-full px-6 md:px-20 xl:px-16 2xl:px-40">
        <Image src={Logo} width={97} height={48} alt="Mtn logo" />
        <h1 className="font-bold text-[28px] md:text-4xl xl:text-[28px]">
          Let’s login to your VOC <br /> account first
        </h1>
        <UserAuthForm />
      </div>
      <div className="hidden lg:flex flex-col basis-1/2 rounded-[20px] overflow-hidden">
        <div className="relative basis-2/3 w-full h-full">
          <Image
            className="object-cover"
            src={backgroundImg}
            alt="MTN customer"
            fill
            sizes="(min-width: 541px) 50vw, 100vw"
          />
        </div>
        <div className="basis-1/3 bg-black h-full text-white p-8">
          <h1 className="font-bold text-3xl mb-1">
            Welcome to the MTN Voice Of Customer!
          </h1>
          <p className="font-light text-lg">
            Gather insights that fuel business decisions, directly from the
            customers with MTN VOC.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
