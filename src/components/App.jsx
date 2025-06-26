import QRCard from "./QRCard";
import qr from "./../assets/image-qr-code.png";

export default function App() {
  return (
    <QRCard qr={qr}>
      <h1 className="header">
        Improve your front-end skills by building projects
      </h1>
      <p className="message">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </QRCard>
  );
}
