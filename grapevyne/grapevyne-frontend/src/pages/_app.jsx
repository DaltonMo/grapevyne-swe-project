import "../styles.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}