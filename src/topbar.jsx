/* eslint-disable react/prop-types */
export function Topbar({cartvalue}) {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <a className="navbar-brand" href="#"><h3>Shopify </h3></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-link" href="#">About</a>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
               Shop
               </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">All Product</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Popular Items</a>
                  <a className="dropdown-item" href="#">New Arrivals</a>
                </div>
             </li>
          </div>
        </div>
        <span className="navbar-text">
          <button className="Maincartvalue">
            <span className="material-symbols-outlined">shopping_cart</span>
             <span className="cartvaluue">{cartvalue}</span>
             </button>
         </span>
      </nav>
    </div>

  );
}
