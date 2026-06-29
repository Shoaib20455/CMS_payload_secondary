import Footer from "./Footer";
import Navbar from "./Navbar";
import RouteFrame from "./RouteFrame";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <RouteFrame>{children}</RouteFrame>
      <Footer />
    </>
  );
}