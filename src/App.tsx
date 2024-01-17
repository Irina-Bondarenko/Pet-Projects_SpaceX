import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { getAppRoutes } from "./helpers/getAppRoutes";
import routes from "./routes/routes";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {getAppRoutes(routes)}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
