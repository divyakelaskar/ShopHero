import './ProductScreen.css';

const ProductScreen = () => {
  return (
    <div className='productscreen'>
      <div className='product__left'>
        <div className='left__image'>
          <img src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80"></img>
        </div>
      </div>

      <div className='left__info'>
        <p className='left__name'>Product 1</p>
        <p>Price : Rs. 4586 /-</p>
        <p>Description : crgjn rtkng trsgv yvdhj drtvkjnhj vhtrknjhn trvh rtlkvtn htvrh rvhn</p>
      </div>

      <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price:<span>Rs. 4586 /-</span>
              </p>
              <p>
                Status:<span>"In Stock"</span>
              </p>
              <p>
                Qty
                <select>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </p>
              <p>
                <button type="button">
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
    </div>
  )
}

export default ProductScreen