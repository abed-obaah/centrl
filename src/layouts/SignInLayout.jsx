import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SignImg from "../assets/sign-in-image.png";
import SignInForm from "../components/SigninForm";
import Image from "../components/Image";
import { ArrowUpRight } from "lucide-react";

const SignInLayout = () => {
  return (
    <main className="h-screen">
      <div className="relative mx-auto max-w-[1290px] 2xl:max-w-[1500px]">
        <div className="absolute left-0 top-2 z-10 ml-4 mt-4">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img alt="Centrl" src={logo} className="size-7" loading="lazy" />
          </Link>
        </div>

        <div className="absolute right-0 top-2 z-10 mr-4 mt-4">
          <Link
            className="flex items-center gap-2 text-50 font-500 text-foreground duration-300 ease-in hover:text-black"
            to={"/details"}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span>Explore Events</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>

      <div className="h-full xl:grid xl:grid-cols-2">
        {/* img */}
        <div className="container hidden h-full items-center justify-center xl:fixed xl:flex xl:w-1/2 xl:overflow-hidden">
          <Image
            className="xl:mx-auto xl:mt-[-1rem] xl:block xl:size-[500px] xl:object-cover 2xl:my-auto"
            src={SignImg}
            alt="Sign In Image"
            loading="lazy"
          />
        </div>
        {/* form */}
        <div className="md:py-16 xl:col-start-2 xl:min-h-screen xl:overflow-y-auto xl:bg-white xl:py-0">
          <div className="container flex items-center justify-center pt-32 md:min-h-screen md:pt-0">
            <SignInForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignInLayout;
