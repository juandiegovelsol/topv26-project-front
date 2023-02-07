import "../styles/NavBarStyle.css";
export function NavBar(props) {
  const { setMenuCoverClasss } = props;

  return (
    <section className="navBarWrapper">
      <article className="teslaText">
        <button className="teslaButton">T E S L A</button>
      </article>
      <article className="productIndex">
        <button className="modelSButton">Model S</button>
        <button className="model3Button">Model 3</button>
        <button className="modelXButton">Model X</button>
        <button className="modelYButton">Model Y</button>
        <button className="solarRoofButton">Solar Roof</button>
        <button className="solarPanelButton">Solar Panel</button>
      </article>
      <article className="optionsIndex">
        <button className="shopButton">Shop</button>
        <button className="accountButton">Account</button>
        <button
          className="menuButton"
          onClick={() => setMenuCoverClasss("menuCoverPage")}
        >
          Menu
        </button>
      </article>
    </section>
  );
}
