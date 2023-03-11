//import logo from './logo.svg';
import './App.css';
import { ProductCart } from './ProductCart';
function App() {

  const productDetails = [
    {
      name : "FREE",
      price : 0,
      currency : "$",
      duration : "month",
      features : [
        { id:1 , name : "Single User", checked : true },
        { id:2 , name : "5GB Storage", checked : true },
        { id:3 , name : "Unlimited Public Projects", checked : true },
        { id:4 , name : "Community Access", checked : true },
        { id:5 , name : "Unlimited Private Projects", checked : false },
        { id:6 , name : "Dedicated Phone Support", checked : false },
        { id:7 , name : "Free Subdomain", checked : false },
        { id:8 , name : "Monthly Status Report", checked : false }
      ]
  },
    {
      name : "PLUS",
      price : 9,
      currency : "$",
      duration : "month",
      features : [
        { id:1 , name : "5 User", checked : true },
        { id:2 , name : "50GB Storage", checked : true },
        { id:3, name : "Unlimited Public Projects", checked : true },
        { id:4, name : "Community Access", checked : true },
        { id:5 , name : "Unlimited Private Projects", checked : true },
        { id:6 , name : "Dedicated Phone Support", checked : true },
        { id:7 , name : "Free Subdomain", checked : true },
        { id:8 , name : "Monthly Status Report", checked : false }
      ]
  },
    {
      name : "PRO",
      price : 49,
      currency : "$",
      duration : "month",
      features : [
        { id:1 , name : "Unlimited Users", checked : true },
        { id:2 , name : "150GB Storage", checked : true },
        { id:3 , name : "Unlimited Public Projects", checked : true },
        { id:4 , name : "Community Access", checked : true },
        { id:5 , name : "Unlimited Private Projects", checked : true },
        { id:6 , name : "Dedicated Phone Support", checked : true },
        { id:7 , name : "Free Subdomain", checked : true },
        { id:8 , name : "Monthly Status Report", checked : true }
      ]
  }
  ]


  return (

<section className="pricing py-5">
  <div className="container">
    <div className="row">
      { productDetails.map(
        (product,k) => (
          <ProductCart key={k} name={product.name} price={product.price} currency={product.currency} duration={product.duration} features={product.features}/>
        )
      )}
     
    </div>
  </div>
</section>

  );
}

export default App;
