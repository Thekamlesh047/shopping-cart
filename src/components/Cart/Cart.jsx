import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../store/cartSlice";

function Cart() {
 const items = useSelector(state => state.cart)
 const dispatch = useDispatch();
 const removeItem = (id) => {
    dispatch(remove(id))
 }

  return (

 
    <div className=" bg-slate-950 pb-2  h-full pt-20 px-2 flex flex-wrap flex-col md:flex-row gap-2 justify-center items-center">
        {items.map((selectedItems) => ( <div key={selectedItems.id} className="card w-[265px] sm:w-96  h-[34rem] bg-base-100 shadow-xl ">
  <figure className=" px-5 pt-8 md:px-10 h-fit md:pt-10">
    <img src={selectedItems.image} alt="Shoes" className="rounded-xl w-[200px] h-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{selectedItems.title}</h2>
    <p>Price: {selectedItems.price}$</p>
    <div className="card-actions">
      <button className="btn bg-red-600 text-white hover:text-black"
      onClick={() => removeItem(selectedItems.id)}
      >remove</button>
    </div>
  </div>
</div>))}
    </div>
  );
}

export default Cart;
