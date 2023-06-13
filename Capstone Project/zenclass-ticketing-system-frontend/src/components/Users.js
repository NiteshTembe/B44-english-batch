import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const Users = () => {
    const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    const effectRun = useRef(false);

    useEffect(() => {
      let isMounted = true;
      const controller = new AbortController();
      const signal = controller.signal;
  
      const getAllUsers = async () => {
        try {
          const response = await axiosPrivate.get('/users/all', {
            signal,
          });
          console.log(response.data);
          isMounted && setUsers(response.data);
        } catch (error) {
          console.log(error);
          navigate('/login', { state: { from: location }, replace: true });
          // router.push({
          //   pathname: '/seller/auth/login',
          //   query: { from: router.pathname },
          // });
        }
      };
  
      // Check if useEffect has run the first time
      if (effectRun.current) {
        getAllUsers();
      }
  
      return () => {
        isMounted = false;
        controller.abort();
        effectRun.current = true; // update the value of effectRun to true
      };
    }, []);

    return (
        <article>
            <h2>Users List</h2>
            {users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user.user_name}</li>)}
                    </ul>
                ) : <p>No users to display</p>
            }
        </article>
    );
};

export default Users;