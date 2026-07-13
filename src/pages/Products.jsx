import { useState } from "react";

import powerPowder from "../assets/power-powder.jpeg";
import moisturizer from "../assets/moisturizer.jpeg";
import sunscreen from "../assets/sunscreen.jpeg";

function Products() {
  const [products] = useState([
    {
      id: 1,
      name: "Power Powder",
      price: 120,
      image: powerPowder,
      description:
        "Power Powder 150ml is an innovative powder-to-foam cleanser that deeply cleanses and gently exfoliates the skin to effectively target impurities and promote skin clarity. It leaves your skin feeling refreshed, smoother, and brighter after each use. This cleanser is a spa day in a bottle.",
    },

    {
      id: 2,
      name: "Moisturizer",
      price: 140,
      image: moisturizer,
      description:
        "This moisturiser boasts a hydrating blend of ingredients that nourish and protect the skin. The addition of extracts and powerful active ingredients contributes to brightening and smoothing the skin, resulting in a glass-like complexion with consistent use.",
    },

    {
      id: 3,
      name: "Sunscreen",
      price: 159,
      image: sunscreen,
      description:
        "This sunscreen provides broad-spectrum UV protection while hydrating and nourishing the skin. It helps prevent sun damage, premature ageing, and pigmentation, making it ideal for daily use.",
    },
  ]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Product Management</h1>

      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.image}
            />

            <h2>{product.name}</h2>

            <h3 style={styles.price}>R{product.price}</h3>

            <p style={styles.description}>
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    background: "#fffaf7",
    minHeight: "100vh",
  },

  heading: {
    color: "#ff6b35",
    marginBottom: "25px",
    fontSize: "32px",
    fontWeight: "bold",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "25px",
  },

  card: {
    background: "#fff",
    borderRadius: "20px",
    padding: "20px",
    border: "2px solid #f4c2c2",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    transition: "0.3s",
  },

  image: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "15px",
  },

  price: {
    color: "#ff6b35",
    marginTop: "10px",
    marginBottom: "15px",
    fontSize: "24px",
    fontWeight: "bold",
  },

  description: {
    color: "#555",
    lineHeight: "1.7",
    textAlign: "justify",
    fontSize: "15px",
  },
};

export default Products;