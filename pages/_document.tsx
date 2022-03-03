/* eslint-disable react/jsx-key */
import { ColorModeScript } from "@chakra-ui/color-mode";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Theme from "../libs/theme";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={Theme.config} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
