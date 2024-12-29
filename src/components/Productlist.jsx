//named export need bracket import
import { Product } from "./Product"
import { useEffect, useState } from "react"
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

export const ProductList = () => {
    const [moretH, setmoretH] = useState([]);
    //moretH = local state variable

    //for search
    const [search,setSearch] = useState("");

    //temp search
    const [tempSearch,setTempSearch] = useState([]);

    const greaterthanH = () => {
      const filteredProducts = moretH.filter((product)=>{
        return product.price > 100;
      })

      setTempSearch(filteredProducts);

    }

    const fetchData = async () => {
      const data = await fetch('https://fakestoreapi.com/products');
      const resData = await data.json();
      // console.log(resData);
      setmoretH(resData);
      setTempSearch(resData);
    }

    useEffect(()=>{
      fetchData();
    },[])

    const searchCall = (e) => {
      // console.log(e.target.value)
      setSearch(e.target.value)
    }

    const searchBtnClick = () => {
      const searchedData = moretH.filter((product)=>{
          return product.title.toLowerCase().includes(search.toLowerCase());
      })
      setTempSearch(searchedData);
    }

    return moretH.length === 0? <Skeleton/> : (
      <>
        <div className="searchArea">
          <input onChange={searchCall} type="text" value={search}/>
          <button onClick={searchBtnClick} className="searchBtn">Search</button>
        </div>
        <button onClick={greaterthanH} className="btn">Greater than $100</button>
        <div className='productlist'>
          {
            tempSearch.map((product) => {
              return(
                <Link className="prodDetail" to={`/product/${product.id}`} key={product.id}><Product product={product}/></Link>
              )
            })
          }
        </div>
      </>
    )
  }