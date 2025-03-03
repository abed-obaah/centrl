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
import AdminLayout from './layouts/AdminLayout';
import AdminThemeLayout from './layouts/AdminThemeLayout';
import CustomizeLayout from './layouts/CustomizeLayout';
import SignInLayout from './layouts/SignInLayout';

// PAGES

// landing pages
import Home from './pages/Home';
import Calenders from './pages/Calenders';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Discover from './pages/Discover';
import Discovered from './pages/dashboard/discover';
import Privacy from './pages/Privacy';
import TrendingDetails from './pages/TrendingDetails';

// user dashboard pages
import UserProfile from './pages/UserProfile';
import UserProfiles from './pages/[id]';
import Competition from './pages/Competition';
import Categoryid from './pages/Category[id]';
import Partiesid from './pages/Parties[id]';
import Settings from './pages/Settings';

// customize page
import HomePage from './pages/customize/home'
import Overview from './pages/customize/overview'

// admin pages
import Dashboard from './pages/admin/Dashboard';
import Users from './pages/admin/users';
import AdminEventManagement from './pages/admin/event-management';
import Block from "./pages/dashboard/block";
import Event from "./pages/dashboard/events/eventpage";
import EventPage from "./pages/dashboard/events/eventpage7";
// import Waitlist from './pages/Waitlist';

// import Signin from './components/auth/signin';
import Admins from './pages/admin/admins';
import Themes from './pages/admin/themes';
import LightThemes from './pages/admin/light-themes';
import SampleTheme from './pages/admin/sample-theme';
import Guests from './pages/customize/guests';

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
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/details" element={<TrendingDetails />} />
        <Route path="/calendar" element={<Calenders />} />

        <Route path="/privacy" element={<Privacy />} />
      </Route>

      <Route element={<DashboardWrapper />}>
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/block" element={<Block />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/[id]" element={<UserProfiles />} />
        <Route path="/competition" element={<Competition />} />
        <Route path="/category[id]" element={<Categoryid />} />
        <Route path="/parties[id]" element={<Partiesid />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event:id" element={<EventPage />} />
        <Route path="/dashboard/discover" element={<Discovered />} />
      </Route>

      <Route element={<CustomizeLayout/>}>
           <Route path="/customize" element={<HomePage/>} />
           <Route path="/guests" element={<Guests/>} />
           <Route path="/overview" element={<Overview/>} />
      </Route>

      <Route path="/sign-in" element={<WaitListLayout />} />
      <Route path="/sign-up" element={<SignInLayout />} />

      {/* Admin Login Layout and Dashboard layout */}
      <Route path="/admin" element={<AdminLoginLayout />} />

      <Route element={<AdminLayout />}>
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/admin-users" element={<Users />} />
        <Route
          path="/admin-event-management"
          element={<AdminEventManagement />}
        />
        <Route path="/admin-admins" element={<Admins />} />
        <Route path="/admin-themes" element={<Themes />} />
      </Route>

      <Route element={<AdminThemeLayout />}>
        <Route path="/admin-themes/light" element={<LightThemes />} />
        <Route path="/admin-themes/sample" element={<SampleTheme />} />
      </Route>
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
