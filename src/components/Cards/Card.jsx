import { data } from "autoprefixer"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
function Card() {
 
  const [product, setProduct] = useState([])

 console.log(product);

 useEffect(() => {
  fetch('https://fakestoreapi.com/products')
  .then(resp => resp.json())
  .then(data => setProduct(data))

 },[]);

 const dispatch = useDispatch()

 const addtocart = (item) => {
   dispatch(add(item))
 }

 const card = product.map((item) => (
  <div key={item.id} className="card w-[265px] sm:max-w-96  md:w-96 h-[34rem] bg-base-100 shadow-xl ">
  <figure className=" px-5 pt-8 md:px-10 h-fit md:pt-10">
    <img src={item.image} alt="Shoes" className="rounded-xl w-[200px] h-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{item.title}</h2>
    <p>Price: {item.price}$</p>
    <div className="card-actions">
      <button className="btn btn-primary"
      onClick={() => addtocart(item)}
      >Add Cart</button>
    </div>
  </div>
</div>
 ))

  return (
    <div className="bg-slate-600 pt-28 gap-2  md:gap-4 px-2 py-2 flex flex-col md:flex-row md:justify-center flex-wrap  items-center">
      {card}
    </div>
  )
}

export default Card

