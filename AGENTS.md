# AGENTS.md

## Product
AI Style Oracle: a high-tech stylist studio (Apple Store at midnight).
Core loop: Intake -> Session (3 looks) -> Save to Rack.

## UI
- Graphite background, glass panels, thin borders.
- Minimal. No colorful gradients. No playful fonts.
- Buttons: rectangular-ish, subtle glow on hover.
- Copy: confident, concise.

## Code
- Next.js App Router + TypeScript + Tailwind.
- Keep components small and reusable.
- Validate all inputs (zod).
- Session generator must return JSON matching /lib/sessionSchema.ts.
