import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import StoreProvider from "@/store/storeProvider";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <StoreProvider>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </StoreProvider>
    </div>
  );
}
