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
import DashboardWrapper from './layouts/DashboardWrapper';
import AdminLoginLayout from './layouts/AdminLoginLayout';

// pages
import Home from './pages/Home';
import Calenders from './pages/Calenders';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Discover from './pages/Discover';
import Privacy from './pages/Privacy';
import TrendingDetails from './pages/TrendingDetails';
import UserProfile from './pages/UserProfile';
import UserProfiles from './pages/[id]';
import Competition from './pages/Competition';
import Categoryid from './pages/Category[id]';
import Partiesid from './pages/Parties[id]';
import Settings from './pages/Settings';
// import Waitlist from './pages/Waitlist';

// import Signin from './components/auth/signin';

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
      </Route>

      <Route element={<DashboardWrapper />}>
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/[id]" element={<UserProfiles />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/category[id]" element={<Categoryid />} />
        <Route path="/parties[id]" element={<Partiesid />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="/sign-in" element={<WaitListLayout />} />
      <Route path="/admin" element={<AdminLoginLayout />} />
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
