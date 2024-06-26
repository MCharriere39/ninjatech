import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./component/navBar";
import Footer from "./component/footer";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from './component/theme';
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Analytics } from "@vercel/analytics/react"
import "./style/globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "La Ninjatheque",
  description: "Toutes les recettes pour votre multi-cuiseur préféré !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <NavBar />
              <div style={{minHeight:"100vh"}}>
                {children}
              </div>
              <Footer />
            </ThemeProvider>
        </AppRouterCacheProvider>
        <Analytics />
      </body>
    </html>
  );
}
