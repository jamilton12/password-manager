

export const generateRandomUsername = (length = 8) => {
  const adjectives = [
    "Quick",
    "Bright",
    "Funny",
    "Silent",
    "Clever",
    "Brave",
    "Happy",
    "Sly",
    "Wise",
    "Bold",
  ];
  const nouns = [
    "Lion",
    "Tiger",
    "Bear",
    "Eagle",
    "Shark",
    "Wolf",
    "Hawk",
    "Dragon",
    "Panther",
    "Falcon",
  ];

  const randomItems = (array: any) => 
    array[Math.floor(Math.random() * array.length)]

  let userName = ""
  userName += randomItems(adjectives)
  userName += randomItems(nouns)
  userName += Math.floor(Math.random() * 10000)
  
  if (userName.length > length) {
    userName = userName.substring(0, length)
  }

  return userName
}