import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Pages
import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import PropertyManagement from "./pages/solutions/PropertyManagement";
import AssetManagement from "./pages/solutions/AssetManagement";
import WasteManagement from "./pages/solutions/WasteManagement";
import Industries from "./pages/Industries";
import Resources from "./pages/Resources";
import Webinars from "./pages/resources/Webinars";
import Videos from "./pages/resources/Videos";
import CaseStudies from "./pages/resources/CaseStudies";
import News from "./pages/resources/News";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import DPA from "./pages/DPA";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/property-management" element={<PropertyManagement />} />
              <Route path="/solutions/asset-management" element={<AssetManagement />} />
              <Route path="/solutions/waste-management" element={<WasteManagement />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/resources/webinars" element={<Webinars />} />
              <Route path="/resources/videos" element={<Videos />} />
              <Route path="/resources/case-studies" element={<CaseStudies />} />
              <Route path="/resources/news" element={<News />} />
              <Route path="/about" element={<About />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/dpa" element={<DPA />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
