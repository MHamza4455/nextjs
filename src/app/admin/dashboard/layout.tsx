import DashboardSidebar from "@/app/components/layouts/DashboardSidebar";
import DashboardHeader from "@/app/components/layouts/DashboardHeader";

export default function DasboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
            <DashboardSidebar />
            <DashboardHeader />
            {children}
        </body>
        </html>
    );
}
