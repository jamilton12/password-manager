import Link from "next/link";
import { SingleItemProps } from "./SingleItem.types";

export function SingleItem(props : SingleItemProps) {
  const { label, icon : Icon, href, onClick } = props

  return (
    <Link href={href} className="flex gap-2 items-center p-2 hover:bg-blue-100/20 
      duration-300 transition-all rounded-md"
      onClick={onClick}  
      >
      <div className="bg-blue-100/20 rounded-md p-2">
        <Icon size={20} />
      </div>
      {label}
    </Link>
  )
}