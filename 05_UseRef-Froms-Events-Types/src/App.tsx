import ContactForm from "./assignment/ContactForm"
import EventHandling from "./assignment/EventHandling"
import FocusInput from "./assignment/FocusInput"
import Forms from "./Components/Forms"

const App = () => {
  return (
    <div>
      <Forms />

      {/* Assignment */}
      <FocusInput />
      <ContactForm />
      <EventHandling />
    </div>
  )
}

export default App