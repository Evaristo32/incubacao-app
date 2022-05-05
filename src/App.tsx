import { BrowserRouter } from "react-router-dom";
import './App.css';
import { AppRoutes } from './routes';
import { MenuLateralComponent } from "./shared/components";
import { AppThemeProvider } from './shared/contexts';
export const App = () => {
  return (
    <AppThemeProvider >
      <BrowserRouter>
        <MenuLateralComponent></MenuLateralComponent>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}
