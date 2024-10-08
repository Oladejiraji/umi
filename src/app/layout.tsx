import { GeistSans } from "geist/font/sans";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { Bounce, ToastContainer } from "react-toastify";
import NextTopLoader from "nextjs-toploader";

import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import "../../public/scss/main.scss";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <ReactQueryProvider>
          <NextTopLoader color="#920AF2" />
          <main className="min-h-screen">{children}</main>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
