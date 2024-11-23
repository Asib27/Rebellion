'use client'

import StarRating from "@/components/star-rating";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useImmer } from "use-immer";

let sidebarMenus = [
  "Rating", "Price", "Color", "Brand", "Size"
]

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
  }
}

const ShowRating = ({rating_dict, filterState, updateFilterState}) => {
  return (
    <div className="">
      {
        Array.from({ length: 5 }, (_, index) => {
          return (
            <AccordionContent className="p-0" key={index}>
              <div className="flex gap-1 py-1 items-center">
                <Checkbox 
                checked={filterState["Rating"][5 - index]}
                onCheckedChange={(e) => updateFilterState(st => {st['Rating'][5-index] = e})} />
                <StarRating stars={5 - index} total={5}/>
                <p>
                  {`(${rating_dict[5 - index] ? rating_dict[5 - index]: 0})`}
                </p>
              </div>
            </AccordionContent>
          )
        })
      }
    </div>
  )
}

const InnerAccordion = ({menu, filterState, updateFilterState}) => {
  if (menu === "Rating") {
    return (
      <ShowRating rating_dict={sidebarMenuDict[menu]} filterState={filterState} updateFilterState={updateFilterState}/>
    )
  }
  else if (menu === 'Color') {
    return <div>
      <AccordionContent className='p-0'>
      {       
        Object.keys(sidebarMenuDict[menu]).map((menuItem, index) => {
          return (
                <div key={index} className="flex gap-3 py-1 items-center">
                  <Checkbox 
                  checked={filterState[menu][menuItem]}
                  className='h-4 w-4'
                  onCheckedChange={(e) => updateFilterState(st => {st[menu][menuItem] = e})} />
                  <p> {`${menuItem} (${sidebarMenuDict[menu][menuItem]})`} </p>
                </div>
          );
        })
      }
      </AccordionContent>
      </div>
  }
  else {
    return (
      <div>
      <AccordionContent className='p-0'>
      {       
        Object.keys(sidebarMenuDict[menu]).map((menuItem, index) => {
          return (
                <div key={index} className="flex gap-3 py-1 items-center">
                  <Checkbox 
                  checked={filterState[menu][menuItem]}
                  className='h-4 w-4'
                  onCheckedChange={(e) => updateFilterState(st => {st[menu][menuItem] = e})} />
                  <p> {`${menuItem} (${sidebarMenuDict[menu][menuItem]})`} </p>
                </div>
          );
        })
      }
      </AccordionContent>
      </div>
      
    )
  }
}

export default function Checkout() {
  const [filterState, updateFilterState] = useImmer({
    'Rating': {
      "5": true, "4": true, "3": true, "2" : true, "1": true
    },
    'Price': {
      "< 2000": true, "2000-3000": true, "3000-4000": true, "4000-5000": true, "> 5000": true
    },
    'Color': {
      'White': true, 'Black': true, 'Blue': true, 'Red': true, 'Green': true
    },
    'Brand': {
      'Nike': true, 'Adidas': true, 'Puma': true
    },
    'Size': {
      '38': true, '39': true, '40': true, '41': true, '42': true, '43': true, '44': true
    }
    })


  return ( 
  <div className="w-full flex max-h-svh">
    <div className="flex-[0.25] rounded-2xl bg-slate-200 dark:bg-slate-900">
    <Accordion type="single" collapsible className="">
    {
      Object.keys(sidebarMenuDict).map((menu, index) => {
        return (
            <div key={index} className="px-5 pt-1">
              <AccordionItem value={menu}>
              <AccordionTrigger className='py-2 text-base'>{menu}</AccordionTrigger>
              <InnerAccordion menu={menu} filterState={filterState} updateFilterState={updateFilterState}/>
              </AccordionItem>
            </div>
        )
      })
    }
    </Accordion>
    
 
    </div>

    <div className="h-full flex-1">
      Menu
    </div>
  </div>
  )
}