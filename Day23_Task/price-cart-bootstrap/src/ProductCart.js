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
       (data,index) => {
         if(data.checked)
         return  <li key={index}><span className="fa-li"><i className="fas fa-check"></i></span>{data.name}</li>
         else 
         return <li key={index} className="text-muted"><span className="fa-li"><i className="fas fa-check"></i></span>{data.name}</li>
       }
     )}
     </>
   );
 }

 export {ProductCart}