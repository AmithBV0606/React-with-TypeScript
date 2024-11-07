import { useRef } from "react"

const FocusInput = () => {
    const focusRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        focusRef.current?.focus();
    }
  return (
    <div>
        <input type="text" placeholder="Click the button to focus" ref={focusRef}/>
        <button onClick={handleClick}>Focus</button>
    </div>
  )
}

export default FocusInput