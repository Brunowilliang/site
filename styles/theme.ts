import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        fontFamily: "Montserrat",
        backgroundColor: "#171719",
      },
    },
  },
  colors: {
    'primary':'#2666DE',
    'primaryOpacity':'#2666DE20',
    'primaryOpacityPlus':'#2666DE50',
    'secondary':'#23232B',
    'background': '#171719',
    'grey': '#848484',
    'white': '#FFFFFF',
    'transparent': 'transparent',
    'success': '#12a454',
    'attention': '#e83f5b',
  }
})

export default theme;