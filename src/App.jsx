import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// layouts
import RootLayout from './layouts/RootLayout';
import WaitListLayout from './layouts/WaitlistLayout';
import DashboardLayout from './layouts/DashboardLayout';

// pages
import Home from './pages/Home';
import Calenders from './pages/Calenders';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Discover from './pages/Discover';
import Privacy from './pages/Privacy';
import TrendingDetails from './pages/TrendingDetails';
// import Waitlist from './pages/Waitlist';

// import Signin from './components/auth/signin';
import Dashboard from './components/dashboard/index';
import Admin from './components/Admin/index';
import CategoryPage from './components/Admin/CategoryPage';

function Contact() {
  return <h1 className="text-3xl font-bold underline">Contact Page</h1>;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/signin" element={<Signin />} /> */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/details" element={<TrendingDetails />} />
        <Route path="/calendar" element={<Calenders />} />
       
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/:admin" element={<Admin />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/sign-in" element={<WaitListLayout />} />
    </>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
