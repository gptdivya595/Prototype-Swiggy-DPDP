import type { ReactNode } from 'react';
import Button from './Button';

interface Props {
  icon: string;
  title: string;
  body: string;
  incentive?: string;
  dpdp?: string;
  allowLabel: string;
  denyLabel: string;
  onAllow: () => void;
  onDeny: () => void;
  children?: ReactNode;
}

/** Just-in-time bottom-sheet micro-notice — SARAL Pillar 2. Asked at the moment of need. */
export default function JitSheet({
  icon,
  title,
  body,
  incentive,
  dpdp,
  allowLabel,
  denyLabel,
  onAllow,
  onDeny,
  children,
}: Props) {
  return (
    <div className="sheet-scrim" onClick={onDeny}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="handle" />
        <div className="ic-lg">{icon}</div>
        <div className="spacer-sm" />
        <h2 className="title">{title}</h2>
        <div className="spacer-sm" />
        <p className="sub">{body}</p>
        {children}
        {incentive && (
          <>
            <div className="spacer-sm" />
            <div className="incentive">{incentive}</div>
          </>
        )}
        <div className="spacer" />
        <div className="stack-sm">
          <Button variant="primary" onClick={onAllow}>
            {allowLabel}
          </Button>
          <Button variant="ghost" onClick={onDeny}>
            {denyLabel}
          </Button>
        </div>
        {dpdp && (
          <>
            <div className="spacer-sm" />
            <div className="dpdp-ref center">{dpdp}</div>
          </>
        )}
      </div>
    </div>
  );
}
