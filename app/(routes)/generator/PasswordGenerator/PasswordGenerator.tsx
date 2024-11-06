import React from "react";
import { PasswordGeneratorProps } from "./PasswordGenerator.types";
import { Checkbox } from "@/components/ui/checkbox";

export function PasswordGenerator(props : PasswordGeneratorProps) {
  const { 
    isMayusSelected, 
    isMinusSelected, 
    isNumbersSelected, 
    isSpecialCaracter, 
    lengthPassword,
    setLengthPassword, 
    setIsMayusSelected,
    setIsMinusSelected,
    setIsNumbersSelected,
    setIsSpecialCaracter
  } = props

  const handleRangeChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setLengthPassword(Number(event.target.value))
  }


  return (
    <div>
      <>
        <div className="w-full p-4 bg-slate-100 rounded-md shadow-md flex gap-2 items-center">
          <label className="block text-sm font-medium text-gray-700 min-w-32">
            Longitud: {lengthPassword}
          </label>
          <input
            type="range"
            id="range"
            min="8" max="50"
            value={lengthPassword}
            onChange={handleRangeChange}
            className="w-full h-2 bg-gray-200 rounded-md appearance-none cursor-pointer"
            />
        </div>
        <div>
          <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
            <Checkbox id="mayus" 
              checked={isMayusSelected}
              onCheckedChange={() => setIsMayusSelected((prev) => !prev)} 
            />
            <label htmlFor="mayus" className="text-sm font-mediumleading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Mayúsculas A-Z
            </label>
          </div>
          <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
            <Checkbox id="minus" 
              checked={isMinusSelected}
              onCheckedChange={() => setIsMinusSelected((prev) => !prev)} 
            />
            <label htmlFor="minus" className="text-sm font-mediumleading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Minusculas A-Z
            </label>
          </div>
          <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
            <Checkbox id="numbers" 
              checked={isNumbersSelected}
              onCheckedChange={() => setIsNumbersSelected((prev) => !prev)} 
            />
            <label htmlFor="numbers" className="text-sm font-mediumleading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Numeros 0-9
            </label>
          </div>
          <div className="flex items-center space-x-2 my-4 bg-slate-100 rounded-md shadow-md p-4">
            <Checkbox id="specialCaracter" 
              checked={isSpecialCaracter}
              onCheckedChange={() => setIsSpecialCaracter((prev) => !prev)} 
            />
            <label htmlFor="specialCaracter" className="text-sm font-mediumleading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Caracteres Especiales: !@#$%&*()
            </label>
          </div>
        </div>
      </>
    </div>
  )
}