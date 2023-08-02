import Nevbar from "@/components/shared/Nevbar";
import Footer from "@/components/shared/Footer";

export default function RootLayout({ children }) {
  return (
 
     <>
      <Nevbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
     </>
 
  );
}
