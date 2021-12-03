import React, {useState} from 'react'

export default {
   title: 'React.memo demo',
}

const NewMessagesCounterSecret = (props: any) => {
   return (
      <div>
         {props.count}
      </div>
   )
}

const UsersSecret = (props: { users: string[] }) => {
   return (
      <div>
         {props.users.map((u, i) => <div key={i}>{u}</div>)}
      </div>
   )
}

const Users = React.memo(UsersSecret)
const NewMessagesCounter = React.memo(NewMessagesCounterSecret)

export const Example1 = () => {

   const [counter, setCounter] = useState(0)
   const [users, setUsers] = useState(['Art', 'Mak', 'Dav'])

   const addUsers = () => {
      setUsers([...users, 'Sweta' + new Date().getTime()])
   }

   return (
      <>
         <button onClick={() => setCounter(() => counter + 1)}>+</button>
         <button onClick={addUsers}>addUser</button>
         <NewMessagesCounter count={counter}/>
         <Users users={users}/>
      </>
   )
}