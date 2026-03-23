import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="container nav-div">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container d-flex justify-content-around">
          <Link class="navbar-brand" to="/">
            Home
          </Link>
          <div className="d-flex">
            <Link className="nav-link p-2" to="/result"> Result</Link>
           
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
