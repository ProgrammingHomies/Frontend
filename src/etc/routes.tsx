import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import PostsPage from "../pages/PostsPage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import OnboardingPage from "../pages/OnboardingPage";
import SignOut from "../pages/SignOut";
import SignUpPage from "../pages/SignUpPage";
import useAuthStore from "../stores/AuthStore";
import ProfilePage from "../pages/ProfilePage";

type ProtectedRouteProps = {
  children: JSX.Element;
};

const createRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route
          path='/onboarding'
          element={
            <ProtectedRoute>
              <OnboardingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/posts'
          element={
            <ProtectedRoute>
              <PostsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/me'
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/signout'
          element={<ProtectedRoute>{<SignOut />}</ProtectedRoute>}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  const { user } = useAuthStore();
  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default createRoutes;
