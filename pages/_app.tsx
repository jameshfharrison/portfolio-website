import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";

const Website = ({
  Component,
  pageProps,
  router,
}: {
  Component: any;
  pageProps: any;
  router: any;
}) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
