import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import ACDuctCleaning from "./pages/Services/ACDuctCleaning";
import KitchenCleaning from "./pages/Services/KitchenCleaning";
import Plumbing from "./pages/Services/Plumbing";
import Painting from "./pages/Services/Painting";
import Electric from "./pages/Services/Electric";
import Handyman from "./pages/Services/Handyman";
import WaterTank from "./pages/Services/WaterTank";
import PestControl from "./pages/Services/PestControl";
import Mold from "./pages/Services/Mold";
import DeepCleaning from "./pages/Services/DeepCleaning";
import PostConstruction from "./pages/Services/PostConstruction";
import Annual_Maintenence from "./pages/Services/Annual_Maintenence";
import Fit_Out from "./pages/Services/Fit_Out";
import WhatsAppButton from "./Whatsapp/WhatsAppButton";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutPage />} />
          
          <Route path="/services/DuctCleaning">
            <Route path="ac-duct-cleaning" element={<ACDuctCleaning />} />
            <Route path="kitchen-cleaning" element={<KitchenCleaning />} />
          </Route>

          <Route path="/services/MaintenanceServices">
            <Route path="Plumbing-service" element={<Plumbing/>}/>
            <Route path="Painting-service" element={<Painting/>}/>
            <Route path="Electric-service" element={<Electric/>}/>
            <Route path="Handyman-service" element={<Handyman/>}/>
          </Route>

          <Route path="/services/SpecializedServices">
            <Route path="Watertank-service" element={<WaterTank/>}/>
            <Route path="Pest-control-service" element={<PestControl/>}/>
            <Route path="Mold-remediation-service" element={<Mold/>}/>
            <Route path="Deep-cleaning-service" element={<DeepCleaning/>}/>
            <Route path="Post-construction-service" element={<PostConstruction/>}/>
          </Route>

          <Route path="/services">
            <Route path="Annual-Maintenance-Contracts" element={<Annual_Maintenence/>}/>
            <Route path="Interior-Fit-Out" element={<Fit_Out/>}/>
          </Route>
        </Route>
      </Routes>
      <WhatsAppButton/>
    </BrowserRouter>
    </>
  );
}

export default App;
