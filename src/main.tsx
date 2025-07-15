import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
import App from "./App.tsx";
// import store from "./app/store.ts";
import { AuthProvider } from "./context/AuthProvider.tsx";
import { ThemeProvider } from "./context/themeContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </ThemeProvider>
  </AuthProvider>
);
