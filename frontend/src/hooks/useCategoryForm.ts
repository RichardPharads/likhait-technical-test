import { CategoryFormData } from "../types";
import { useState } from "react";

interface UseCategoryFormProps{
  initialData?: Partial<CategoryFormData>
  onSubmit : (data: CategoryFormData) => Promise<void>
}

export function useCategoryForm({
  initialData, onSubmit
}:UseCategoryFormProps){
  const [formData, setFormData ] = useState<CategoryFormData>({
    name: initialData?.name || ""
  })
  const [isSubmitting , setIsSubmitting ] = useState(false)
  const [error, setErrors] = useState("")

  const handleChange = (value: string) => {
    setFormData({name: value})
    setErrors("")
  }

  const handleSubmit = async  (e: React.FormEvent) => {
    e.preventDefault();

    if(!formData.name.trim()){
      setErrors("Category name is Required.")
      return;
    }
  
    try{
      await onSubmit(formData)
      setFormData({name: ""})
    }
    finally{
      setIsSubmitting(false)
    }
  }
  
  return {
    formData,
    error,
    isSubmitting,
    handleChange,
    handleSubmit,
  };

}