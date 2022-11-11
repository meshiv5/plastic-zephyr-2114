import { useState } from "react"
import '../Styles/Sidebar.css'

export default function SidebarItems({item, isChild}){
    const [open, setOpen] = useState(false)

   

    if(item.type === 'section'){
      return (
        <div className={`sidebar-item plain disabled-link`}>
            { item.icon && <i className={item.icon}></i> }
            {item.title}
        </div>
      )
    }
    
    return (
        <div className={`sidebar-item ${(open || isChild) && "open"}` }>
            <div className={`sidebar-title ${!isChild && 'has-border'}`}  onClick={() => !isChild && setOpen(!open)  }>
                <span className={`${item.path && 'item-link'} ${isChild && item.type !== 'product' && 'bold-text'}`}>
                    {item.icon && <i className={item.icon}></i> }
                    {item.title} 
                </span> 
                {!!item.childrens && !isChild && <i className={`${open ? 'bi-dash' : 'bi-plus'} toggle-btn`}></i>}
            </div>
            {/* {item.type === "category" && <div className="divider"></div>} */}
            
            {!!item.childrens &&
              <div className={`sidebar-content ${isChild && 'child-content'}`}>
                  {item.childrens.map((child, index) => <SidebarItems key={index} item={child} isChild />) }
              </div>
            }
        </div>
    )
}