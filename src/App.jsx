
import Student from "./Student.jsx"

function App() {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={27} isStudent={false} />
      <Student name="Squidward" age={45} isStudent={false} />
      <Student name="Sandy" age={25} isStudent={true} />
    </>
  )
}

export default App
