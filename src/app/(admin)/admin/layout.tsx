import Footer from "@/components/admin/Footer";
import Header from "@/components/admin/Header";

export default function AdminLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}