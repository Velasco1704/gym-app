import { Nav } from "@/components/Nav/Nav";
import "./globals.scss";

export const metadata = {
  title: "TuGym",
  description: "A filiate con nosotros",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
