export default function Footer() {
  return (
    <footer className="bg-surface2 text-text">
      <div className="grad-line" />
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <span className="grad-text font-semibold">Ironfield Recruitment</span>
        <span className="text-sm text-muted">
          Rory Tanton trading as Ironfield Recruitment &middot; Market Weighton, East Yorkshire
        </span>
        <span className="text-sm text-muted">&copy; 2026</span>
      </div>
    </footer>
  );
}
