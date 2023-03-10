//import logo from './logo.svg';
import './App.css';

function App() {

  const product_details = [
    {
      name : "FREE",
      price : 0,
      currency : "$",
      duration : "month",
      features : [
        { name : "Single User", checked : true },
        { name : "5GB Storage", checked : true },
        { name : "Unlimited Public Projects", checked : true },
        { name : "Community Access", checked : true },
        { name : "Unlimited Private Projects", checked : false },
        { name : "Dedicated Phone Support", checked : false },
        { name : "Free Subdomain", checked : false },
        { name : "Monthly Status Report", checked : false }
      ]
  },
    {
      name : "PLUS",
      price : 9,
      currency : "$",
      duration : "month",
      features : [
        { name : "5 User", checked : true },
        { name : "50GB Storage", checked : true },
        { name : "Unlimited Public Projects", checked : true },
        { name : "Community Access", checked : true },
        { name : "Unlimited Private Projects", checked : true },
        { name : "Dedicated Phone Support", checked : true },
        { name : "Free Subdomain", checked : true },
        { name : "Monthly Status Report", checked : false }
      ]
  },
    {
      name : "PRO",
      price : 49,
      currency : "$",
      duration : "month",
      features : [
        { name : "Unlimited Users", checked : true },
        { name : "150GB Storage", checked : true },
        { name : "Unlimited Public Projects", checked : true },
        { name : "Community Access", checked : true },
        { name : "Unlimited Private Projects", checked : true },
        { name : "Dedicated Phone Support", checked : true },
        { name : "Free Subdomain", checked : true },
        { name : "Monthly Status Report", checked : true }
      ]
  }
  ]


  return (

<section className="pricing py-5">
  <div className="container">
    <div className="row">
      { product_details.map(
        (product) => (
          <ProductCart name={product.name} price={product.price} currency={product.currency} duration={product.duration} features={product.features}/>
        )
      )}
     
    </div>
  </div>
</section>

  );
}

function ProductCart({name,price,currency,duration,features}){
   return (
    <div className="col-lg-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{name}</h5>
            <h6 className="card-price text-center">{currency}{price}<span className="period">/{duration}</span></h6>
            <hr/>
            <ul className="fa-ul">
              <ProductFeature features = {features}/>              
            </ul>
            <div className="d-grid">
              <a href="/" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
   );
}

function ProductFeature({features}){
  return (
    <>
    {features.map(
      (data) => {
        if(data.checked)
        return  <li><span className="fa-li"><i className="fas fa-check"></i></span>{data.name}</li>
        else 
        return <li className="text-muted"><span className="fa-li"><i className="fas fa-check"></i></span>{data.name}</li>
      }
    )}
    </>
  );
}

export default App;
