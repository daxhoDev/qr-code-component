export default function QRCard({ qr, children }) {
  return (
    <div className="qr-card">
      <img src={qr} className="qr-image"></img>
      {children}
    </div>
  );
}
