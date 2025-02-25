import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Img from '../assets/admin-login-img.png';
import LoginForm from '../components/admin/LoginForm';

const AdminLoginLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="h-full">
        <div className="max-w-[1290px] 2xl:max-w-[1500px] mx-auto relative">
          <div className="absolute z-10 top-2 left-0 mt-4 ml-4">
            <Link to="/">
              <img alt="Centrl" src={logo} className="size-7" loading="lazy" />
            </Link>
          </div>

          <Link
            className="absolute z-10 top-6 right-4  text-50 inline-flex items-center justify-center rounded-[13px] border  px-4 py-2  font-500 border-[#000]/15 text-foreground hover:text-white hover:bg-black duration-300 ease-in shadow-xs"
            to={'/'}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Centrl Events
          </Link>
        </div>

        <div className="xl:grid xl:grid-cols-2 items-center  h-screen">
          {/* img */}
          <div>
            <img
              className="hidden xl:block w-[450px] mx-auto"
              src={Img}
              alt="Login Image"
              loading="lazy"
            />
          </div>

          {/* form */}
          <div>
            <LoginForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLoginLayout;
