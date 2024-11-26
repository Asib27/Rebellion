import StarRating from "@/components/star-rating";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

const ShowRating = ({rating_dict, filterState, updateFilterState}) => {
  return (
    <div className="">
      <AccordionContent className="p-0">
      {
        Array.from({ length: 5 }, (_, index) => {
          return (
              <div key={index} className="flex gap-1 py-1 items-center">
                <Checkbox 
                checked={filterState["Rating"][5 - index]}
                onCheckedChange={(e) => updateFilterState(st => {st['Rating'][5-index] = e})} />
                <StarRating stars={5 - index} total={5}/>
                <p>
                  {`(${rating_dict[5 - index] ? rating_dict[5 - index]: 0})`}
                </p>
              </div>
          )
        })
      }
      </AccordionContent>
    </div>
  )
}

const InnerAccordion = ({menu, filterState, updateFilterState, sidebarMenuDict}) => {
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


export default function ProductsSidebar({filterState, updateFilterState, sidebarMenuDict}) {
  return <Accordion type="single" collapsible className="">
    {Object.keys(sidebarMenuDict).map((menu, index) => {
      return (
        <div key={index} className="px-5 pt-1">
          <AccordionItem value={menu}>
            <AccordionTrigger className='py-2 text-base'>{menu}</AccordionTrigger>
            <InnerAccordion menu={menu} filterState={filterState} updateFilterState={updateFilterState} sidebarMenuDict={sidebarMenuDict}/>
          </AccordionItem>
        </div>
      );
    })}
  </Accordion>;
}
