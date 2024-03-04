import React,{ useState, useEffect }  from 'react'
import './Cart.css';



const Cart = ({cart , setCart}) => {
  const [total,setTotal] = useState(0);
  
  useEffect(() =>{
    setTotal(cart.reduce((acc,curr) => acc+ parseInt(curr.pages), 0));
   },[cart]);

  const removeCart = (selectedItem) => {
    setCart(cart.filter((item) => item !== selectedItem));
  };
  const thank = () => {
    
    alert("Thanks For Your Order")
    setCart([]);
  };



  return (
    <> 
      <div className='cartitems'>
        <center><h1 className='name'>Cart Products</h1></center>
        {cart.map((item) => (

           <div key={item.rank} className="item">

             <div className='imgdetails'>
              <div className='image'> 
                <img src={`${process.env.PUBLIC_URL}/${item.imageLink}`} {...item.imageLink} alt="" />
              </div>
              <div className='details'>
                  <h4 className=''><strong>Title:</strong>{item.title} </h4><br />
                  <h4> <strong>Author:</strong>{item.author} </h4><br />
                  <h4> <strong>Price:</strong>{item.pages} </h4>
                  
              </div>
              </div> 
              <div className='buttondiv'><button className='removebutton' onClick={() => removeCart(item)} >X</button></div>
             
           </div>
           
        ))}
        <h1 className='name'>Total Amount is : {total}</h1>
       <center> <button className='butt' onClick={thank}>Checkout</button></center>
      </div>
    </>
  )
}
export default Cart;