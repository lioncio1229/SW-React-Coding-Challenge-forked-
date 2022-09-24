import { useEffect, useState } from "react";

const useFetchProduct = (url, authorizationHeaderToken) => {
  const [fetching, setFetching] = useState(true);
  const [products, setProducts] = useState(null);

  const fetchProduct = () => setFetching(true);

  useEffect(() => {
    const options = {
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json',
            'Authorization' : authorizationHeaderToken
        }
    }
    fetch(url, options)
      .then(res => res.json())
      .then(resJson => {
        setProducts(resJson);
        setFetching(false);
      });

  }, [fetching === true, url, authorizationHeaderToken])

  return { products, fetching, fetchProduct };
};

export default useFetchProduct;
