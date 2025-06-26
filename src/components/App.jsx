import QRCard from "./QRCard";

export default function App() {
  return (
    <QRCard qr="./assets/image-qr-code.png">
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
