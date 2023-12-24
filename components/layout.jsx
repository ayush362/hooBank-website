import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const Layout = ({ children }) => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
