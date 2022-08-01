import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

// components/layout.js

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
