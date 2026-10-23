export default function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow ${light ? 'text-white/65' : ''}`}>{children}</p>
}
