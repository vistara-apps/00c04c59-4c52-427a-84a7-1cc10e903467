interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-surface rounded-lg p-6 border border-surface hover:border-primary/30 transition-colors duration-200">
      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-fg mb-2">{title}</h3>
      <p className="text-sm text-muted">{description}</p>
    </div>
  );
}
