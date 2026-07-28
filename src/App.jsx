import UserGreeting from "./UserGreeting.jsx"
import Student from "./Student.jsx"
import List from "./List.jsx"

function App() {

  const fruits = [{ id: 1, name: "Apple", calories: 95 },
  { id: 2, name: "Banana", calories: 100 },
  { id: 3, name: "Orange", calories: 45 },
  { id: 4, name: "Mango", calories: 60 }];

  const vegetables = [{ id: 5, name: "Potatoes", calories: 95 },
  { id: 6, name: "Carrots", calories: 100 },
  { id: 7, name: "Kole", calories: 45 },
  { id: 8, name: "Lettuce", calories: 60 }];

  return (
    <>
      {/* <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={27} isStudent={false} />
      <Student name="Squidward" age={45} isStudent={false} />
      <Student name="Sandy" age={25} isStudent={true} />
      <Student />
      <UserGreeting isLoggedIn={true} username="BroCode" /> */}
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}
    </>
  )
}

export default App
