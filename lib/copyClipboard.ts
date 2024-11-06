import { toast } from "@/hooks/use-toast"
export const copyClipboard = async (text: string) => {
  navigator.clipboard.writeText(text)
  toast({
    title: "Value Copied ✔",
  })
}