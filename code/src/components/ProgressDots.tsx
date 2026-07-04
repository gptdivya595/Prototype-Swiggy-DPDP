export default function ProgressDots({ step, total }: { step: number; total: number }) {
  return (
    <div className="dots">
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={`d${i === step ? ' on' : ''}`} />
      ))}
    </div>
  );
}
