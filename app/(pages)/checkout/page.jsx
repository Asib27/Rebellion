import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

let sidebarMenus = [
  "Rating", "Price", "Color", "Brand", "Size"
]

let sidebarMenuDict = {
  'Rating': {
    "5": 10, "4": 10, "3": 5, "2" : 1, "1": 1
  },
  'Price': {
    "1000-2000": 10, "2000-3000": 10, "3000-4000": 10, "4000-5000": 10, "5000-6000": 10
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

export default function Checkout() {
  return ( 
  <div className="w-full flex h-svh max-h-svh">
    <div className="h-full flex-[0.4] rounded-2xl bg-slate-200 dark:bg-slate-900">
    {
      Object.keys(sidebarMenuDict).map((menu, index) => {
        return (
          <Accordion type="multiple"  key={index}>
            <div className="px-5 pt-1">
              <AccordionItem value={menu}>
              <AccordionTrigger>{menu}</AccordionTrigger>
              {
                Object.keys(sidebarMenuDict[menu]).map((menuItem, index) => {
                  // console.log(sidebarMenuDict[menu], menuItem)
                  return (
                    
                      <AccordionContent>
                        {`${menuItem} - ${sidebarMenuDict[menu][menuItem]}`}
                      </AccordionContent>
                    
                  );
                })
                
              }
              </AccordionItem>
            </div>
          </Accordion>
        )
      })
    }
    
 
    </div>

    <div className="h-full flex-1">
      Main
    </div>
  </div>
  )
}