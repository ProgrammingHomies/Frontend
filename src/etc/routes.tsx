import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import OnboardingPage from "../pages/OnboardingPage";
import SignOut from "../pages/SignOut";
import SignUpPage from "../pages/SignUpPage";
import PostsPage from "../pages/PostsPage";
import useAuthStore from "../stores/AuthStore";
import PostList from "../components/PostList";
import PostDetail from "../components/PostDetail";

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
          }>
            <Route
          path=''
          element={
            <ProtectedRoute>
              <PostList />
            </ProtectedRoute>
          }></Route>
          <Route
            path=':postId'
            element={
              <ProtectedRoute>
                <PostDetail />
              </ProtectedRoute>
            }></Route>
        </Route>
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
