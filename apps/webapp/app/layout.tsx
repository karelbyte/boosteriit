import './global.css';
import { AppContextProvider } from "./contexts/appContext";
export const metadata = {
  title: 'Boosteriit',
  description: 'Boosteriit app generator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
