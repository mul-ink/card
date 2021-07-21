import { serve } from "https://deno.land/x/sift@0.1.7/mod.ts";
import homePage from "./pages/home.jsx";
import notFoundPage from "./pages/404.jsx";

serve({
  "/": homePage,
  404: notFoundPage,
});
