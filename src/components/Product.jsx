export const Product = ({product}) => {

    const {image,price,title,id} = product;
    return (
      <>
        <div className='card'>
          <img className='img' src={image} alt="" />
          <h3>{title}</h3>
          <h3>{price}</h3>
        </div>
      </>
    )
  }