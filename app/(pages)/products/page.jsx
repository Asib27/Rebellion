'use client'

import { useImmer } from "use-immer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ProductsSidebar from "./sidebar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";


let sidebarMenuDict = {
  'Rating': {
    "5": 10, "4": 10, "3": 5, "2" : 1, "1": 1
  },
  'Price': {
    "< 2000": 10, "2000-3000": 10, "3000-4000": 10, "4000-5000": 10, "> 5000": 10
  },
  'Color': {
    'White': 2, 'Black': 5, 'Blue': 5, 'Red': 5, 'Green': 5
  },
  'Brand': {
    'Nike': 10, 'Adidas': 15, 'Puma': 18
  },
  'Size': {
    '38': 10, '39': 5, '40': 8, '41': 10, '42': 5, '43': 4, '44': 1
  },
  'Type': {
    "Premium": 10, "OEM": 15, "1:1": 12
  },
  'Height': {
    "High Neck": 4, "Low Neck": 10
  }
}


const ProductCard = ({className, cardData}) => {
  return (<Card className={cn(className, 'drop-shadow-xl')}>
    <CardContent className='p-0'>
      <Image className="w-full rounded-t-xl" src={cardData['image']} width={400} height={200} alt={cardData['name']} />
    </CardContent>
    <CardHeader>
      <CardTitle>{cardData['name']}</CardTitle>
      <CardDescription>
        <p>{cardData['description']}</p>
        <p>{`${Object.keys(cardData['colors']).length} colors`}</p>
      </CardDescription>
    </CardHeader>
    <CardFooter className="flex items-center justify-between">
      <p>{`Tk ${cardData['price']}`}</p>
      
    </CardFooter>
  </Card>);
}

const cardData = {
  "id": "1",
  "name": "Nike Air Max",
  "description": "Comfortable for all",
  "price": "150",
  "image": "/temp_images/real_shoe1.png",
  "colors": {
    'red' : "/temp_images/shoe1.png",
    'green' : "/temp_images/shoe2.png"
  }
}


export default function Product() {
  let dummyState = {}

  for (let category in sidebarMenuDict) {
    dummyState[category] = {}
    for (let key in sidebarMenuDict[category]) {
      dummyState[category][key] = true;
    }
  }

  const [filterState, updateFilterState] = useImmer(dummyState)


  return ( 
  <div className="w-full flex gap-6 mt-4">
    <div className="flex-[0.25] rounded-2xl bg-slate-200 dark:bg-slate-900">
     <ProductsSidebar filterState={filterState} updateFilterState={updateFilterState} sidebarMenuDict={sidebarMenuDict} />
    
 
    </div>

    <div className="flex-1">
      <div className="rounded-2xl w-full h-500">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {Array.from({ length: 10 }, (_, index) => {
            return (
              <ProductCard className='transfrom-transition transform hover:scale-105 duration-300 ease-in-out cursor-pointer' cardData={cardData} key={index} />
            )
          })}
        </div>
        

      </div>
    </div>
  </div>
  )
}
