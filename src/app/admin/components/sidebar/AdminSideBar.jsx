import Link from 'next/link';

export default function AdminSideBar (){

    return (
        <div className="admin__box-sidebar">
            <Link href="/admin">Создать услугу</Link>
            <Link href="/admin/bookings">Записи</Link>
            <Link href="/admin/services">Услуги</Link>
            <Link href="/admin/logout">Выйти</Link>
        </div>
    )
}