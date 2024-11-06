import { KeyRound, Folder } from "lucide-react";
import { DataHeaderMainProps } from "./HeaderMain.types";

export const dataHeaderMain : DataHeaderMainProps[] = [
  {
    icon : KeyRound,
    text : "Contraseña",
    typeElement : "password"
  }, 
  {
    icon : Folder,
    text : "Carpeta",
    typeElement : "folder"
  }
]