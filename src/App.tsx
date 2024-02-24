import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { getUsers } from './redux/userSlice'

type AppProps = {
  id: number
  name: string
  username: string
  email: string
}

export function App() {
  const dispatch = useAppDispatch()

  const users = useAppSelector(state => state.user.data)

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <>
      {users?.map((user: AppProps) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <h3>{user.username}</h3>
          <h4>{user.email}</h4>
          <hr />
        </div>
      ))}
    </>
  );
}