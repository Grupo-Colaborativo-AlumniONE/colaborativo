import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3898ec", // Color primario
    },
    secondary: {
      main: "rgb(161, 163, 247)", // Color secundario
    },
    background: {
      primary: "#16161a", // Color de fondo principal
      secondary: "#232629", // Color de fondo secundario
    },
    text: {
      primary: "#94a1b2", // Color del texto principal
      title: "#fffffe", // Color del título
    },
    button: {
      main: "#3898ec", // Color de los botones
      hover: "#535bf2", // Color al pasar el ratón sobre los botones
      text: "#fffffe", // Color del texto en los botones
      cancel: "#f85149", // Color del botón de cancelar
      hoverCancel: "#f85149", // Color al pasar el ratón sobre el botón de cancelar Mejor usar cancel como hover y agregarle opacity de 0.6
      add: "#4caf50", // Color del botón de agregar
      delete: "#f85149", // Color del botón de eliminar
    },
    link: {
      main: "#3898ec", // Color de los enlaces
      visited: "#535bf2", // Color de los enlaces visitados
    },
    drawer: {
      main: "#013E74", // Color del drawer/sidebar
    },
  },
  fontFamily: {
    sans: "sans-serif",
  },
});

export default theme;
