"use client"

import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { copyClipboard } from "@/lib/copyClipboard";
import { Label } from "@radix-ui/react-label";
import { Copy, Shuffle } from "lucide-react";
import { useEffect, useState } from "react";
import { PasswordGenerator } from "../PasswordGenerator";

import { generateCustomPassword } from "@/lib/generateCustomPassword";
import { generateRandomUsername } from "@/lib/generateRandomUser";
import { UserGenerator } from "../UserGenerator";
import { generateRandomEmail } from "@/lib/generateRandomEmail";



export function FormGenerator() {
  const [itemValueInput, setItemValueInput] = useState("");
  const [selectedValue, setSelectedValue] = useState<
  "password" | "user" | string 
  >("password");

  const [userTypeSelected, setUserTypeSelected] = useState("username")

  const [lengthPassword, setLengthPassword] = useState(11)
  const [isMayusSelected, setIsMayusSelected] = useState(true)
  const [isMinusSelected, setIsMinusSelected] = useState(true)
  const [isNumbersSelected, setIsNumbersSelected] = useState(true)
  const [isSpecialCaracter, setIsSpecialCaracter] = useState(true)

  useEffect(() => {
    if (selectedValue === "password") {
      const newPassword = generateCustomPassword(
        lengthPassword, 
        isMayusSelected, 
        isMinusSelected, 
        isNumbersSelected, 
        isSpecialCaracter
      )
      setItemValueInput(newPassword)
    }
  }, [
    lengthPassword, 
    isMayusSelected, 
    isMinusSelected, 
    isNumbersSelected, 
    isSpecialCaracter,
    selectedValue
  ])

  useEffect(() => {
    if (selectedValue === "user") {
      const newUserGenerated = generateRandomUsername()
      setItemValueInput(newUserGenerated)
    }

    if (userTypeSelected === 'email') {
      const newEmail = generateRandomEmail()
      setItemValueInput(newEmail)
    }
  }, [selectedValue, userTypeSelected])



  const handleShuffleClick = () => {
    if (selectedValue === "password") {
      const password = generateCustomPassword(
        lengthPassword, 
        isMayusSelected, 
        isMinusSelected, 
        isNumbersSelected, 
        isSpecialCaracter
      )

      setItemValueInput(password)
    }else if (selectedValue === "user") {
      if (userTypeSelected === "email") {
        const email = generateRandomEmail()
        setItemValueInput(email)
        
      }else if (userTypeSelected === "username") {
        const username = generateRandomUsername()
        setItemValueInput(username)
      }
    }
  }

  return (
    <div className="mt-5 max-w-2xl">
      <div className="relative w-full">
        <Input placeholder="Username" value={itemValueInput} onChange={() => {}}/>
        <Copy className="w-5 h-5 absolute right-12 top-3 cursor-pointer"
          onClick={() => copyClipboard(itemValueInput)}
        />
        <Shuffle className="w-5 h-5 absolute right-2 top-3 cursor-pointer" 
          onClick={handleShuffleClick}
        />
      </div>
      <div className="bg-slate-100 rounded-md shadow-md my-4 p-4">
        <p className="mb-4 text-slate-500">¿Que quieres generar?</p>
        <RadioGroup
          defaultValue="password"
          onValueChange={(value) => setSelectedValue(value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="password" id="r1" />
            <Label htmlFor="r1">Password</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="user" id="r2" />
            <Label htmlFor="r2">Usuario</Label>
          </div>
        </RadioGroup>
      </div>
      {selectedValue === "password" ? (
        <PasswordGenerator 
          isMayusSelected={isMayusSelected} 
          isMinusSelected={isMinusSelected} 
          isNumbersSelected={isNumbersSelected} 
          isSpecialCaracter={isSpecialCaracter} 
          lengthPassword={lengthPassword} 
          setLengthPassword={setLengthPassword} 
          setIsMayusSelected={setIsMayusSelected} 
          setIsMinusSelected={setIsMinusSelected} 
          setIsNumbersSelected={setIsNumbersSelected} 
          setIsSpecialCaracter={setIsSpecialCaracter}
        />
      ) : (
        <UserGenerator setUserTypeSelected={setUserTypeSelected}  />
      )}
    </div>
  )
}