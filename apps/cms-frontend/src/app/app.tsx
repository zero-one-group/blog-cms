import { CmslibFrontendFeatureLogin } from '@cms-blog/cmslib-frontend/feature-login';
import { CmslibFrontendFeatureDashboard } from '@cms-blog/cmslib-frontend/feature-dashboard';
import { ChakraProvider } from '@chakra-ui/provider';
import { Route, Link } from 'react-router-dom';

export function App() {
  return (
    <ChakraProvider>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/login">Click here to login.</Link>
          </div>
        )}
      />
      <Route path="/login" component={CmslibFrontendFeatureLogin} />
      <Route path="/home" component={CmslibFrontendFeatureDashboard} />
    </ChakraProvider>
  );
}

export default App;
