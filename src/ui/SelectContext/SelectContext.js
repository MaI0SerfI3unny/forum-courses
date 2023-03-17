import { useContext, createContext } from 'react'

export const SelectContext = createContext()
export const useSelectContext = () => useContext(SelectContext)
