import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Layouts } from "./router";
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layouts>
                <Home />
              </Layouts>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
