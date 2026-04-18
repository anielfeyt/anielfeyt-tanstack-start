import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="container mx-auto py-10 text-center text-slate-500 text-sm space-y-3">
      <div className="flex justify-center gap-6">
        <Link
          to="/privacy-policy"
          className="text-slate-400 hover:text-slate-600 transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          to="/terms-and-conditions"
          className="text-slate-400 hover:text-slate-600 transition-colors"
        >
          Terms &amp; Conditions
        </Link>
      </div>
      <p>&copy; {new Date().getFullYear()} Aniel Feyt. All rights reserved.</p>
    </footer>
  );
}
