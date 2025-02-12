import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

// layouts
import RootLayout from './layouts/RootLayout';

// pages
import Home from './pages/Home';
import Signin from './components/auth/signin';
import Pricing from './components/pricing/pricing';
import About from './components/about/about';
import Discover from './components/discover/discover';
import Details from './components/trending/details/details';
import Calenders from './components/trending/calenders';
import Dashboard from './components/dashboard/index';
import Admin from './components/Admin/index';
import CategoryPage from './components/Admin/CategoryPage';

function Contact() {
  return <h1 className="text-3xl font-bold underline">Contact Page</h1>;
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/details" element={<Details />} />
      <Route path="/calender" element={<Calenders />} />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/:admin" element={<Admin />} />
      <Route path="/category/:category" element={<CategoryPage />} />
    </Route>
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

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/signin" element={<Signin />} />
//         <Route path="/pricing" element={<Pricing />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/discover" element={<Discover />} />
//         <Route path="/details" element={<Details />} />
//         <Route path="/calender" element={<Calenders />} />
//         <Route path="/home" element={<Dashboard />} />
//         <Route path="/:admin" element={<Admin />} />
//         <Route path="/category/:category" element={<CategoryPage />} />
//       </Routes>
//     </Router>
//   );
// }
