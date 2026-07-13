"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { FiHome, FiImage, FiFileText, FiMessageSquare, FiLogOut, FiSettings } from 'react-icons/fi';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Basic client side auth check
    const token = localStorage.getItem('adminToken');
    if (!token && pathname !== '/admin/login') {
      router.push('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, [pathname, router]);

  if (isLoading) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center text-forest">Loading...</div>;
  }

  // If on login page, don't show sidebar
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (!isAuthenticated) return null;

  const menuItems = [
    { name: 'Dashboard', icon: <FiHome />, path: '/admin' },
    { name: 'Gallery', icon: <FiImage />, path: '/admin/gallery' },
    { name: 'Documents', icon: <FiFileText />, path: '/admin/documents' },
    { name: 'Messages', icon: <FiMessageSquare />, path: '/admin/messages' },
    { name: 'Settings', icon: <FiSettings />, path: '/admin/settings' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-[#0d120f] text-white flex-shrink-0 z-50">
        <div className="p-6 border-b border-gray-800">
          <Link href="/">
            <span className="text-xl font-bold tracking-wider cursor-pointer">
              Admin<span className="text-gold">Panel</span>
            </span>
          </Link>
        </div>
        
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.name} href={item.path}>
                <span className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                  isActive ? 'bg-forest text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}>
                  {item.icon}
                  <span>{item.name}</span>
                </span>
              </Link>
            )
          })}
        </nav>
        
        <div className="p-4 mt-auto absolute bottom-0 w-full md:w-64 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-500 transition-colors w-full"
          >
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 bg-gray-50 md:ml-0 overflow-y-auto">
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between sticky top-0 z-40">
          <h2 className="text-xl font-bold text-gray-800">
            {menuItems.find(i => i.path === pathname)?.name || 'Admin'}
          </h2>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-forest text-white rounded-full flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </header>
        
        <div className="p-8 pb-24">
          {children}
        </div>
      </main>
    </div>
  );
}
