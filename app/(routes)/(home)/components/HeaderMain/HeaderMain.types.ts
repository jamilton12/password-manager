type TypeElement = "" | "password" | "folder"

export type DataHeaderMainProps = {
  icon: React.ComponentType<{ className? : string }>,
  typeElement: TypeElement,
  text: string
}

export type HeaderMainProps = {
  userId : string
}