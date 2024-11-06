import { Dispatch, SetStateAction } from "react";


export type PasswordGeneratorProps = {
  setLengthPassword: Dispatch<SetStateAction<number>>,
  lengthPassword: number,
  isMayusSelected: boolean,
  setIsMayusSelected: Dispatch<SetStateAction<boolean>>,
  isMinusSelected: boolean,
  setIsMinusSelected: Dispatch<SetStateAction<boolean>>,
  isSpecialCaracter: boolean,
  setIsSpecialCaracter: Dispatch<SetStateAction<boolean>>
  isNumbersSelected: boolean,
  setIsNumbersSelected: Dispatch<SetStateAction<boolean>>
}