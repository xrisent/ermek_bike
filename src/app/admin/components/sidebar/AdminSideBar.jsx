"use client"; // Добавляем для App Router

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSideBar() {
  const pathname = usePathname();

  return (
    <div className="admin__box-sidebar">
      <Link 
        href="/admin" 
        className={pathname === "/admin" ? "active" : ""}
      >
        Создать услугу
      </Link>
      <Link 
        href="/admin/bookings" 
        className={pathname === "/admin/bookings" ? "active" : ""}
      >
        Записи
      </Link>
      <Link 
        href="/admin/services" 
        className={pathname.slice(0,15) === "/admin/services" ? "active" : ""}
      >
        Услуги
      </Link>
      <Link 
        href="/admin/logout" 
        className={pathname === "/admin/logout" ? "active" : ""}
      >
        Выйти
      </Link>
    </div>
  );
}
