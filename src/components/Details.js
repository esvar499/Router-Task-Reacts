import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Details() {
  const { type, id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let response;
      if (type === 'post') {
        response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      } else if (type === 'user') {
        response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      }
      setData(response.data);
    };
    fetchData();
  }, [type, id]);

  return (
    <div>
      <h1>{type === 'post' ? 'Post Details' : 'User Details'}</h1>
      {data && (
        <div>
          {type === 'post' ? (
            <>
              <h2>{data.title}</h2>
              <p>{data.body}</p>
            </>
          ) : (
            <>
              <h2>{data.name}</h2>
              <p>Email: {data.email}</p>
              <p>Phone: {data.phone}</p>
              <p>Website: {data.website}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Details;
