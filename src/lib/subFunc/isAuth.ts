import Gookies from "js-cookie";

export default function checkCookie() {
    const token = Gookies.get("token");
    if (!token) {
        return false;
    } else {
        return true;
    }
}