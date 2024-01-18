import { data } from "autoprefixer"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/cartSlice";
import { getItems } from "../../store/apiData";
function Card() {

 const {data: product, status} = useSelector(state => state.Api)

 const dispatch = useDispatch()

 useEffect(() => {
  dispatch(getItems())


 },[]);

 if (status === "loading") {
  return <p className=" text-black pt-28 flex justify-center items-center">
   <span className="loading loading-infinity loading-lg"></span>
    </p>  
 }
 if (status === "erro") {
  return  <p className=" text-black pt-28 flex justify-center items-center">
  <div role="alert" className="alert alert-error">
 <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
 <span>Error! Somthing wemt wrong</span>
</div>
   </p>  
 
  
 }
 

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

