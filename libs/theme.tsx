import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

const styles = {
  global: (props: any) => {
    body: {
      bg: mode("#f0e7db", "#202023")(props);
    }
  },
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
    Link: {
      baseStyle: (props: any) => ({
        color: mode("#3d7aed", "#ff63c3")(props),
        textUnderlineOffset: 3,
      }),
    },
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  glassTeal: "#88ccca",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const Theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});

export default Theme;
