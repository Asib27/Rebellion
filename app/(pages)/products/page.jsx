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
  <div className="w-full flex max-h-svh gap-6 mt-4">
    <div className="flex-[0.25] rounded-2xl bg-slate-200 dark:bg-slate-900">
     <ProductsSidebar filterState={filterState} updateFilterState={updateFilterState} sidebarMenuDict={sidebarMenuDict} />
    
 
    </div>

    <div className="h-full flex-1">
      <div className="rounded-2xl bg-slate-200 dark:bg-slate-900 w-full h-500">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

      </div>
    </div>
  </div>
  )
}
