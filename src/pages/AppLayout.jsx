import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { useState } from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function AppLayout() {
  const [hasAppScrolled, setHasAppScrolled] = useState(true);
  const intersectionRef = useIntersectionObserver(
    (val) => setHasAppScrolled(val),
    0.5
  );

  return (
    <>
      <Header hasAppScrolled={hasAppScrolled} />
      <main>
        <Outlet context={intersectionRef} />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
