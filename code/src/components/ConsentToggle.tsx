interface Props {
  title: string;
  desc: string;
  on: boolean;
  disabled?: boolean;
  onChange: (on: boolean) => void;
}

/** Un-ticked, affirmative toggle — SARAL Pillar 1B. Starts OFF; user must actively enable. */
export default function ConsentToggle({ title, desc, on, disabled, onChange }: Props) {
  return (
    <div className="toggle-row">
      <div className="txt">
        <div className="h">{title}</div>
        <div className="p">{desc}</div>
      </div>
      <button
        className={`switch${on ? ' on' : ''}`}
        disabled={disabled}
        aria-pressed={on}
        aria-label={title}
        onClick={() => !disabled && onChange(!on)}
      >
        <span className="knob" />
      </button>
    </div>
  );
}
