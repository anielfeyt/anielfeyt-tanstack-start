export default function Header() {
  return (
    <div className="container mx-auto sticky top-7 lg:top-14 z-20 px-4">
      <header className="py-4 px-4 lg:px-14 flex items-center bg-slate-50/70  rounded-full justify-between ring-2 ring-slate-300/70 backdrop-blur-lg shadow-md shadow-slate-200">
        <div>
          <button
            onClick={() => window.scrollTo(0, 0)}
            className="hover:cursor-pointer"
          >
            <span className="font-light text-slate-400 hover:text-slate-600 transition-colors">
              anielfeyt.com
            </span>
          </button>
        </div>
        <div>
          <nav className="flex gap-4">
            <a href="#about">
              <span className="font-light text-slate-400 hover:text-slate-600 transition-colors">
                about
              </span>
            </a>
            <a href="#technologies">
              <span className="font-light text-slate-400 hover:text-slate-600 transition-colors">
                technologies
              </span>
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
}
