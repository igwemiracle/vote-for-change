import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Footer from "./layouts/Footer";
import Homepage from "./pages/Homepage";
import CandidateList from "./pages/CandidateList";
import CandidateProfile from "./pages/CandidateProfile";
import LoginPage from "./pages/LoginPage";
import VotingPage from "./pages/VotingPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./layouts/Navbar";

const Layout = ({ children }) => {
  const location = useLocation(); // Now it works correctly inside Layout
  const hideNavFooterRoutes = ["/signin", "/vote", "/confirmation"];
  const shouldHideNavFooter = hideNavFooterRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideNavFooter && <Navbar />}
      <div className='flex-grow flex flex-col  w-full'>
        {children}
      </div>
      {!shouldHideNavFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/candidates" element={<CandidateList />} />
          <Route path="/candidates/:id" element={<CandidateProfile />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route
            path="/vote"
            element={
              <ProtectedRoute>
                <VotingPage />
              </ProtectedRoute>
            }
          />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
