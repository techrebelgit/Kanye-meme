// app/layout.tsx
import WalletContextProvider from "./components/WalletProvider"; 
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import "@/styles/globals.css"; // Optional Tailwind or custom styles

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <WalletContextProvider>
          <Navbar />
          <main className="flex flex-col items-center justify-center min-h-screen p-4">
            {children}
          </main>
          <Footer />
        </WalletContextProvider>
      </body>
    </html>
  );
}
