import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import SignImg from "../assets/sign-in-image.png";
import SignInForm from "../components/SigninForm";

const SignInLayout = () => {
  return (
    <div className="min-h-screen">
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
        </div>

        <div className="h-full xl:grid xl:grid-cols-2">
          {/* img */}
          <div className="container hidden h-full items-center justify-center xl:fixed xl:flex xl:w-1/2 xl:overflow-hidden">
            <img
              className="xl:mx-auto xl:mt-[-1rem] xl:block xl:size-[500px] xl:object-cover 2xl:my-auto"
              src={SignImg}
              alt="Sign In Image"
              loading="lazy"
            />
          </div>
          {/* form */}
          <div className="py-16 xl:col-start-2 xl:min-h-screen xl:overflow-y-auto xl:bg-white xl:py-0">
            <div className="container flex min-h-screen items-center justify-center">
              <SignInForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignInLayout;
