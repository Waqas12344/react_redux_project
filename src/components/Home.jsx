import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg";

  const img3="https://www.soloto.com/cdn/shop/products/4_1601555c-481a-40e0-8e23-595f6b9644d9.jpg?v=1667301774";

const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "HP laptop",
      price: 490,
      imgSrc: img1,
      id: "sdjfdlaajsdabhsjdfdfv",
    },
    {
      name: "Dell Laptop",
      price: 490,
      imgSrc: img1,
      id: "sdjfdlaajsdbhjajdfdfv"
    },
     {
      name: " Lenovo Laptop",
      price: 490,
      imgSrc: img1,
      id: "sdjfdlaajsdbhjabhdfv",
    },
  ];

  const productList2 = [
    {
      name: "Mens Shoes",
      price: 110,
      imgSrc: img2,
      id: "sdjajsdbhjabhsjdfdfv",
    },
    {
      name: "Mens Shoes",
      price: 40,
      imgSrc: img2,
      id: "sdjfdsdbhjabhsjdfdfv",
    },
    {
      name: "Mens Shoes",
      price: 490,
      imgSrc: img2,
      id: "sdjfdlajabhsjdfdfv"
    },
     {
      name: " Mens Shoes ",
      price: 490,
      imgSrc: img2,
      id: "saajsdbhjabhsjdfdfv",
    },
  ];
  const productList3 = [
    {
      name: "Kids shoes",
      price: 100,
      imgSrc: img3,
      id: "sdjajsdbhjabhsjdfdfv",
    },
    {
      name: "Kids shoes",
      price: 40,
      imgSrc: img3,
      id: "sdjfdsdbhjabhsjdfdfv",
    },
    {
      name: "Kids shoes",
      price: 90,
      imgSrc: img3,
      id: "sdjfdlajabhsjdfdfv"
    },
     {
      name: " Kids shoes",
      price: 490,
      imgSrc: img3,
      id: "saajsdbhjabhsjdfdfv",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <div>
      <h2 className="heading">laptop Catageri</h2>
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
    <h2 className="heading">Mens Shoes</h2>
    <div className="home">
      {productList2.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
    <h2 className="heading">Kids shoes</h2>
    <div className="home">
      {productList3.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>

    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;