function Card({ title, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">
      {title && (
        <div className="border-b border-slate-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-slate-800">
            {title}
          </h2>
        </div>
      )}

      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

export default Card;