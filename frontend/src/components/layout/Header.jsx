function Header() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">

      <h1 className="text-lg font-semibold text-slate-800">
        Identity Access Management Portal
      </h1>

      <span className="text-sm text-slate-500">
        Okta Authentication
      </span>

    </header>
  );
}

export default Header;