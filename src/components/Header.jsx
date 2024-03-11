import logo from "../assets/picture_investment-calculator.png";

export default function Header() {
  return (
    <div id="header">
      <img src={logo} alt="Logo by Investment calculator" />
      <h1>Investment Calculator</h1>
    </div>
  );
}
