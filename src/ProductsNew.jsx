export function ProductsNew() {
  return (
    <div>
      <h1>New Product</h1>
      <form>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Image url: <input name="image_url" type="text" />
        </div>
        <div>
          Price: <input name="price" type="text" />
        </div>
        <div>
          Deescription: <input name="desciption" type="text" />
        </div>
        <button type="submit">Add New Product</button>
      </form>
    </div>
  );
}
