import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { getProductById } from "../redux/selectors";

export default function ProductDetail() {
  const { id } = useParams();
  const product = useSelector((state) => getProductById(state, id));

  return (
    <div className="bg-gradient-to-br from-saffron to-indigo min-h-screen p-8">
      <div className="flex flex-col md:flex-row gap-10">
        <motion.div initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} className="w-full md:w-1/2">
          <Canvas style={{height: 400}}>
            {/* 3D Model loader for clothing (fallback to image if no model) */}
            <OrbitControls />
            {/* Example: <Model url={product.model3dUrl} /> */}
          </Canvas>
          <img src={product.imageUrl} alt={product.altText} className="rounded-xl shadow-xl mt-6" loading="lazy" />
        </motion.div>
        <div className="md:w-1/2 space-y-6">
          <h1 className="font-bold text-3xl">{product.name}</h1>
          <p className="text-lg">{product.description}</p>
          <div className="flex gap-4">
            <span className="text-xl font-semibold text-gold">₹{product.price}</span>
            <span className="text-gray-400">GST: {product.gst}%</span>
          </div>
          <div>
            <label>Size: </label>
            <select className="border rounded px-2 py-1">
              {product.sizes.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <button className="btn-primary">Add to Cart</button>
        </div>
      </div>
      {/* Reviews, recommendations, etc. */}
    </div>
  );
}