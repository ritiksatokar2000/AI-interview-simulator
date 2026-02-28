const Header = () => {
  return (
    <div class="container nav-div">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container d-flex justify-content-around">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <div className="d-flex">
            <a className="nav-link p-2"> Home</a>
            <a className="nav-link p-2">Result</a>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
