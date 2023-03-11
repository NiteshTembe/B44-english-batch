import './App.css';
import {ProductCart} from './ProductCart.js';
function App() {

  const productDetails = [
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
      { productDetails.map(
        (product) => (
          <ProductCart name={product.name} price={product.price} currency={product.currency} duration={product.duration} features={product.features}/>
        )
      )}
     
    </div>
  </div>
</section>

  );
}

export default App;
