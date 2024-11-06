"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from "@/hooks/use-toast"
import { Element } from "@prisma/client"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { Copy, MoreHorizontal, User } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type ColumnsProps = Element

export const columns: ColumnDef<ColumnsProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "typeElement",
    header: "Type Element",
  },
  {
    accessorKey: "urlWebsite",
    header: "Url Website",
  }, {
    accessorKey: "directory",
    header: "Directory",
  }, {
    accessorKey: "actions",
    header: "Actions",
    cell : ({ row }) => {
      const password = row.original.password
      const username = row.original.username
      const onEditElement = () => {
        window.location.href = `/element/${row.original.id}`
      }
      const copyItemClipboard = (item: string, name : string) => {
        navigator.clipboard.writeText(item)
        toast({
          title: `${name} copied to clipboard✔`,
        })
      }
      return (
        <div className="flex gap-2 justify-center items-center">
          {password && (
            <Copy className="w-4 h-4 cursor-pointer" onClick={() => copyItemClipboard(password, "Password")} />
          )} 
          {username && (
            <User className="w-4 h-4 cursor-pointer" onClick={() => copyItemClipboard(username, "Username")} />
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                Actions
              </DropdownMenuLabel>
              <DropdownMenuItem 
                onClick={onEditElement}
              >
                Edit
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> 
        </div>
      )
    }
  }
  ]
