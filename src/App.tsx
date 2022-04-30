import { BrowserRouter } from "react-router-dom";
import './App.css';
import { AppRoutes } from './routes';
import { SinglePage } from "./shared/layouts/single-page/singlePage";
import { AppThemeProvider } from './shared/contexts';
import { MenuLateral } from "./shared/components";
export const App = () => {
  return (
    <AppThemeProvider >
      <BrowserRouter>
        <MenuLateral></MenuLateral>
        {/* <SinglePage> */}
        <AppRoutes />
        {/* </SinglePage> */}
      </BrowserRouter>
    </AppThemeProvider>
  );
}
