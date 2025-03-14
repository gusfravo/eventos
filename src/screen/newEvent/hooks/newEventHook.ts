
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
    date: new Date().toISOString(),
    color: '',
    icon: ''
  })

  const handleFormChange = (name: keyof InputsForm, value: string) => {
    setInputs((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const resetForm = () => {
    setInputs({
      name: '',
      date: new Date().toISOString(),
      color: '',
      icon: ''
    });
  }

  return { inputs, handleFormChange, resetForm }

}

export default useForm;

