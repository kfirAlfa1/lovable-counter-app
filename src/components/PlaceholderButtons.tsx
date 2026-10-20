const labels = ["Button 1", "Button 2", "Button 3", "Button 4"];

const PlaceholderButtons = () => (
  <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
    {labels.map((label) => (
      <button
        key={label}
        type="button"
        className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700"
      >
        {label}
      </button>
    ))}
  </div>
);

export default PlaceholderButtons;
