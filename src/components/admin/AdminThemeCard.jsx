export const AdminThemeCard = ({ gradient, label }) => (
  <div className="space-y-2">
    <div className={`h-24 w-full rounded-lg ${gradient}`} />
    <p className="text-50 text-foreground">{label}</p>
  </div>
);
