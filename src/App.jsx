import { AppRouter } from "./Router/AppRouter";
import { AppTheme } from "./themes/AppTheme";

const App = () => {
  return (
    <>
      <AppTheme>
        <AppRouter />
      </AppTheme>
    </>
  );
};

export default App;