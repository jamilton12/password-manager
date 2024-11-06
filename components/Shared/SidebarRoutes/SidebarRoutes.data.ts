import { CreditCard, Earth, Landmark, LayoutList, Lock, Settings, Star, UserPen } from "lucide-react";

export const dataSidebarElements = [
  {
    title : "Elements",
    icon : LayoutList,
    children : [
      {
        item : "Favourites",
        href : "/favourites",
        icon : Star
      },
      {
        item : "Logins",
        href : "/logins-elements",
        icon : Earth
      },
      {
        item : "Credit Cards",
        href : "/credit-cards",
        icon : CreditCard
      }
    ]
  }
]

export const dataSidebarConfigurations = [
  {
    title : "Configurations",
    icon : Settings,
    children : [
      {
        item : "Profile",
        href : "/profile",
        icon : UserPen,
        premium : false
      },
      {
        item : "Security",
        href : "#",
        icon : Lock,
        premium : true
      },
      {
        item : "Suscriptions",
        href : "#",
        icon : Landmark,
        premium : true
      }
    ]
  }
]