/* eslint-disable react/jsx-key */
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import Theme from "../libs/theme";
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
    <ChakraProvider theme={Theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
};

export default Website;
