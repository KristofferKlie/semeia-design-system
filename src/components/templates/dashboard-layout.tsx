import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  Settings,
  LogOut,
  Menu,
  X,
  GraduationCap,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  active?: boolean;
}

export interface DashboardLayoutProps {
  /** Current user name */
  userName?: string;
  /** User avatar URL */
  userAvatar?: string;
  /** Navigation items */
  navItems?: NavItem[];
  /** Current active nav item */
  activeNav?: string;
  /** Nav item click handler */
  onNavClick?: (href: string) => void;
  /** Logout handler */
  onLogout?: () => void;
  /** Page content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

const defaultNavItems: NavItem[] = [
  { label: "Dashboard", href: "/", icon: <LayoutDashboard className="h-5 w-5" /> },
  { label: "Meus Cursos", href: "/courses", icon: <BookOpen className="h-5 w-5" /> },
  { label: "Conquistas", href: "/achievements", icon: <Trophy className="h-5 w-5" /> },
  { label: "Configurações", href: "/settings", icon: <Settings className="h-5 w-5" /> },
];

/**
 * DashboardLayout - Main application layout with sidebar navigation
 *
 * @example
 * <DashboardLayout userName="João Silva" activeNav="/">
 *   <StudentDashboard {...props} />
 * </DashboardLayout>
 */
export function DashboardLayout({
  userName = "Usuário",
  userAvatar,
  navItems = defaultNavItems,
  activeNav = "/",
  onNavClick,
  onLogout,
  children,
  className,
}: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const initials = userName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const Sidebar = () => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-6 border-b">
        <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
          <GraduationCap className="h-6 w-6 text-white" />
        </div>
        <div>
          <span className="font-bold text-lg">SemeIA</span>
          <span className="block text-xs text-muted-foreground">Educação</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.href}
            onClick={() => {
              onNavClick?.(item.href);
              setSidebarOpen(false);
            }}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
              activeNav === item.href
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      {/* User section */}
      <div className="border-t p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            {userAvatar && <AvatarImage src={userAvatar} />}
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm truncate">{userName}</p>
            <p className="text-xs text-muted-foreground">Estudante</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onLogout}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className={cn("min-h-screen bg-background", className)}>
      {/* Mobile header */}
      <header className="lg:hidden flex items-center justify-between px-4 py-3 border-b bg-card">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold">SemeIA</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
          <Menu className="h-5 w-5" />
        </Button>
      </header>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-64 bg-card shadow-xl">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
            <Sidebar />
          </div>
        </div>
      )}

      {/* Desktop layout */}
      <div className="flex">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-64 border-r bg-card min-h-screen fixed left-0 top-0">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="flex-1 lg:ml-64">
          <div className="container py-6 px-4 lg:px-8 max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
