import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { ThemeProvider } from "./ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <ThemeProvider attribute="class"> */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
      </div>
      <Footer />
      {/* </ThemeProvider> */}
    </>
  );
}
