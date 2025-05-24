'use server'
import { cookies } from "next/headers";

export default async function checkCookie() {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')
    return token !== undefined;
    //дурня, переробити
}