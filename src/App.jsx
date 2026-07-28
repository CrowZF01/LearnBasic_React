import UserGreeting from "./UserGreeting.jsx"
import Student from "./Student.jsx"
import List from "./List.jsx"

function App() {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={27} isStudent={false} />
      <Student name="Squidward" age={45} isStudent={false} />
      <Student name="Sandy" age={25} isStudent={true} />
      <Student />
      <UserGreeting isLoggedIn={true} username="BroCode" />
      <List />
    </>
  )
}

export default App
