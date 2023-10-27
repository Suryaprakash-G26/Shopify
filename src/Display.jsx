export function Display() {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-interval="5000">
          <img src="https://litcommerce.com/blog/wp-content/uploads/2022/01/fb-ads-idea.webp" className="d-block w-100 Slideshow" alt="First Slide" />
        </div>
        <div className="carousel-item" data-interval="5000">
          <img src="https://litcommerce.com/blog/wp-content/uploads/2022/01/fb-ads-idea.webp" className="d-block w-100 Slideshow" alt="Second Slide" />
        </div>
        <div className="carousel-item" data-interval="5000">
          <img src="https://qwiqode.com/cdn/shop/products/collection-list-1.jpg?v=1660867311" className="d-block w-100 Slideshow" alt="Third Slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-target="#carouselExampleInterval" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-target="#carouselExampleInterval" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </button>
    </div>
  );
}
