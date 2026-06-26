import { useState } from "react";

function Products() {
  const [products] = useState([
    {
      id: 1,
      name: "Power Powder",
      price: 250,
      image:
        "https://via.placeholder.com/250x250?text=Power+Powder",
      description:
        "A skin treatment powder designed to support clearer and healthier skin.",
      benefits: [
        "Helps reduce acne",
        "Brightens complexion",
        "Improves skin texture",
      ],
      ingredients: [
        "Niacinamide",
        "Zinc Oxide",
        "Vitamin C",
      ],
      history:
        "Developed for clients experiencing acne and pigmentation concerns.",
    },

    {
      id: 2,
      name: "Moisturizer",
      price: 180,
      image:
        "https://via.placeholder.com/250x250?text=Moisturizer",
      description:
        "Hydrating moisturizer suitable for daily skincare routines.",
      benefits: [
        "Deep hydration",
        "Strengthens skin barrier",
        "Smooth skin appearance",
      ],
      ingredients: [
        "Hyaluronic Acid",
        "Shea Butter",
        "Vitamin E",
      ],
      history:
        "Created to provide long-lasting hydration for dry and sensitive skin.",
    },

    {
      id: 3,
      name: "Sunscreen",
      price: 220,
      image:
        "https://via.placeholder.com/250x250?text=Sunscreen",
      description:
        "Broad spectrum sunscreen for daily UV protection.",
      benefits: [
        "Prevents sun damage",
        "Reduces premature aging",
        "Protects against UV rays",
      ],
      ingredients: [
        "Zinc Oxide",
        "Titanium Dioxide",
        "Vitamin E",
      ],
      history:
        "Recommended for daily protection against harmful sun exposure.",
    },
  ]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Product Management
      </h1>

      {/* Upload Section */}

      <div style={styles.uploadCard}>
        <h2>Upload Product</h2>

        <input
          type="text"
          placeholder="Product Name"
          style={styles.input}
        />

        <input
          type="number"
          placeholder="Price"
          style={styles.input}
        />

        <textarea
          placeholder="Product Description"
          style={styles.textarea}
        />

        <textarea
          placeholder="Benefits"
          style={styles.textarea}
        />

        <textarea
          placeholder="Ingredients"
          style={styles.textarea}
        />

        <textarea
          placeholder="Product History"
          style={styles.textarea}
        />

        <input
          type="file"
          accept="image/*"
          style={styles.input}
        />

        <button style={styles.uploadBtn}>
          Upload Product
        </button>
      </div>

      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img
              src={product.image}
              alt={product.name}
              style={styles.image}
            />

            <h2>{product.name}</h2>

            <h3>R{product.price}</h3>

            <p>{product.description}</p>

            <h4>Benefits</h4>

            <ul>
              {product.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>

            <h4>Ingredients</h4>

            <ul>
              {product.ingredients.map((i, index) => (
                <li key={index}>{i}</li>
              ))}
            </ul>

            <h4>Product History</h4>

            <p>{product.history}</p>

            <div style={styles.actions}>
              <button style={styles.editBtn}>
                Edit Product
              </button>

              <button style={styles.deleteBtn}>
                Delete Product
              </button>
            </div>
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
    marginBottom: "20px",
  },

  uploadCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "20px",
    marginBottom: "30px",
    border: "2px solid #f4c2c2",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "10px",
    border: "1px solid #ddd",
  },

  textarea: {
    width: "100%",
    minHeight: "80px",
    marginBottom: "10px",
    borderRadius: "10px",
    padding: "12px",
  },

  uploadBtn: {
    background: "#ff6b35",
    color: "white",
    border: "none",
    padding: "12px 20px",
    borderRadius: "10px",
    cursor: "pointer",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(350px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "white",
    borderRadius: "20px",
    overflow: "hidden",
    border: "2px solid #f4c2c2",
    padding: "20px",
  },

  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
    borderRadius: "15px",
  },

  actions: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },

  editBtn: {
    flex: 1,
    background: "#ffb703",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "10px",
  },

  deleteBtn: {
    flex: 1,
    background: "#ff6b35",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "10px",
  },
};

export default Products;