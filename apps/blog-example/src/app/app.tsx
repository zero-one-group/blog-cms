import { BlogExampleLibsFeatureHome } from '@cms-blog/blog-example-libs/feature-home';
import { ChakraProvider } from '@chakra-ui/provider';
import { Route, Link } from 'react-router-dom';

export function App() {
  return (
    <ChakraProvider>
      <Route path="/" component={BlogExampleLibsFeatureHome} />
    </ChakraProvider>
  );
}

export default App;
