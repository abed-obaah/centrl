import { Outlet } from "react-router-dom";
import Header from "../features/nextgen/components/Header";
import Footer from "../features/nextgen/components/Footer";

const NextGenLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default NextGenLayout;
