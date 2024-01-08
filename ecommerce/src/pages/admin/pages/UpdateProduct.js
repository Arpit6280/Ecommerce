import React, { useContext } from "react";
import myContext from "../../../context/data/myContext";

function UpdateProduct() {
  const context = useContext(myContext);
  const { products, setProducts, updateProduct } = context;
  console.log(products);
  return (
    <div>
      <div className=" flex justify-center items-center h-screen">
        <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
          <div className="">
            <h1 className="text-center text-white text-xl mb-4 font-bold">
              Update Product
            </h1>
          </div>
          <div>
            <input
              type="text"
              name="title"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product title"
              onChange={(e) =>
                setProducts({ ...products, title: e.target.value })
              }
              value={products.title}
            />
          </div>
          <div>
            <input
              type="text"
              name="price"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product price"
              onChange={(e) =>
                setProducts({ ...products, price: e.target.value })
              }
              value={products.price}
            />
          </div>
          <div>
            <input
              type="text"
              name="imageurl"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product imageUrl"
              onChange={(e) =>
                setProducts({ ...products, imageUrl: e.target.value })
              }
              value={products.imageUrl}
            />
          </div>
          <div>
            <input
              type="text"
              name="category"
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product category"
              onChange={(e) =>
                setProducts({ ...products, category: e.target.value })
              }
              value={products.category}
            />
          </div>
          <div>
            <textarea
              cols="30"
              rows="10"
              name="title"
              value={products.description}
              className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
              placeholder="Product Description"
              onChange={(e) =>
                setProducts({ ...products, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className=" flex justify-center mb-3">
            <button
              className=" bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg"
              onClick={updateProduct}
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProduct;
