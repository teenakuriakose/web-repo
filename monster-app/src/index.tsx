import ReactDOM from "react-dom/client";
import i18n from "./i18n";
import { I18nextProvider } from "react-i18next";
import Setup from "./config/Setup";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <I18nextProvider i18n={i18n}>
    <Setup />
  </I18nextProvider>
);
