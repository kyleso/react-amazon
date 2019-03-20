import React from "react";

function ProductForm(props) {
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const { currentTarget } = event;
  //   const fD = new FormData(currentTarget);

  //   props.onSubmit({
  //     title: fD.get('title'),
  //     description: fD.get('description'),
  //     price: fD.get('price'),
  //   })

  //   currentTarget.reset();
  // }

  const { title, description, price } = props;
  // onSubmit={handleSubmit}
  return (
    <div className="ProductForm">
      <form onSubmit={props.onSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input
            onChange={event => {
              props.onChange({ title: event.currentTarget.value });
            }}
            name="title"
            id="title"
            value={title}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <br />
          <textarea
            onChange={event => {
              props.onChange({ description: event.currentTarget.value });
            }}
            name="description"
            id="description"
            value={description}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <br />
          <input
            onChange={event => {
              props.onChange({ price: parseInt(event.currentTarget.value) });
            }}
            name="price"
            id="price"
            value={price}
          />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
