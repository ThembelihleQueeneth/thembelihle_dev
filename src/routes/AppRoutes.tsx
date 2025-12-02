import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import CartoonStorytellingApp from "../pages/Journey";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Homepage */}
      <Route path="/" element={<LandingPage />} />

      {/* Your animated storytelling page */}
      <Route path="/journey" element={<CartoonStorytellingApp />} />

      {/* Fallback (optional) */}
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
};
