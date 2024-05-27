import { Link } from "react-router-dom";
import logoGG from "/logo-gg.png";
// import "src/routes/nav.css"

export const Navigator = () => {
  return (
    <>
      <nav className="container-nav">
        <Link to=''>
          <img src={logoGG} alt="" />
        </Link>
        <ul className="container-ul-nav">
          <li>
            <Link to='cards1'>Card </Link>
          </li>
          <li>
            <Link to='cards2'>Card 2</Link>
          </li>
          <li>
            <Link to='button'>Button</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
