import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dirigenti from "./pages/Dirigenti";
import PostExit from "./pages/PostExit";
import FamiglieHNWI from "./pages/FamiglieHNWI";
import Servizi from "./pages/Servizi";
import Risorse from "./pages/Risorse";
import ChiSiamo from "./pages/ChiSiamo";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dirigenti" element={<Dirigenti />} />
          <Route path="/post-exit" element={<PostExit />} />
          <Route path="/famiglie-hnwi" element={<FamiglieHNWI />} />
          <Route path="/servizi" element={<Servizi />} />
//          <Route path="/risorse" element={<Risorse />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
