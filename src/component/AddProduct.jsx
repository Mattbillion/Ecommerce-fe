import "../style/AddProduct.css"
export default function AddProduct() {
  return (
    <div>
      <div className="Add Product"></div>
      <h1>Add Product</h1>
      <form action="">
        <input type="text" placeholder="Product name"></input>
        <input type="text" placeholder="Price"></input>
        <input type="text" placeholder="Image"></input>
        <input type="text" placeholder="Brand"></input>
        <input className = "category-input" type="text" placeholder="Category"></input>
      </form>
      <button className="Form-btn">Add +</button>

      <div className="add_category">
      <h1>Add Category</h1>
      <input className = "category-input" type="text" placeholder="Category"></input>
      </div>
      <button className="Form-btn">Add +</button>

      <div className="add_brand">
      <h1>Add Brand</h1>
      <input className = "category-input" type="text" placeholder="Add Brand"></input>
      </div>
      <button className="Form-btn">Add +</button>
    </div>
  )
}