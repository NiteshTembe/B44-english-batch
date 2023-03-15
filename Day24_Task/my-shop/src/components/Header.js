function Header(){

const bannerImages = [
    {
        id:"banner1", src : "https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg", alt : "Education Purpose only"
    },
    {
        id:"banner2", src : "https://i.pinimg.com/originals/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg", alt : "Education Purpose Only"
    }
]

    return (
        <header className="bg-dark py-1">
                <div id="shopppingCarousel" className="carousel slide">
                <div className="carousel-inner">
                {
                    bannerImages.map(( banner, index)=>(
                        <div key={banner.id} className={index===0 ? "carousel-item active" : "carousel-item"}>
                            <img className="banner" src={banner.src} alt={banner.alt}/>
                        </div>
                    ))
                }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#shopppingCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#shopppingCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
                </div>
        </header>
    );
}

export { Header }