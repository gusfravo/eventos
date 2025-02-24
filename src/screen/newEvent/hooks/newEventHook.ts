
import { useState } from "react";


export interface InputsForm {
  name: string,
  date: string,
  color: string,
  icon: string
}

export const useForm = () => {
  const [inputs, setInputs] = useState<InputsForm>({
    name: '',
    date: '',
    color: '',
    icon: ''
  })

  const handleFormChange = (name: keyof InputsForm, value: string) => {
    console.log("handleFormChange", value)
    setInputs((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return { inputs, handleFormChange }

}

export default useForm;

