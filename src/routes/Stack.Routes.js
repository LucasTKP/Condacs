import * as React from "react";
import { Routes, Route} from "react-router-dom";
import { Home } from "./Home"
import { PageService } from "./PageService"

export function StackRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PageServices" element={<PageService  />} />
      </Routes>
  );
};