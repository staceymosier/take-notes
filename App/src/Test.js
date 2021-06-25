import React, { useState, useEffect } from 'react';

const Test = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("data/sample.json")
      .then(res => res.json())
      .then(
        (res) => {
          setIsLoaded(true);
          setItems(res);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.data.map(item => (
          <li key={item.id}>
            {item.document_owner} {item.price}
          </li>
        ))}
      </ul>
    );
  }
}

export default Test;