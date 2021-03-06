import React, { Component, useContext, useState } from 'react'
import { RiTShirt2Line, RiComputerLine, RiRedditLine, RiHome8Line, RiMickeyLine } from 'react-icons/ri';
import { GiChickenOven } from 'react-icons/gi';
import { GlobalContext } from '../../../App';


const BannerOneCategories = _ => {

    const localGlobalContext = useContext(GlobalContext);
    
      return (
        <>
            <div className="highlighted-categories">
                <h5 className="highlighted__title">
                    o Seleccione una categoria:
                </h5>
                <div className="highlight-lists d-flex justify-content-center mt-4">
                    {localGlobalContext.map(objCategory => {
                        return (
                            <div className="category-item" key={objCategory.id}>
                                <a href={objCategory.slug} className="d-block">
                                    <span className="icon-element">
                                        <img src={objCategory.icon_host}/>
                                        
                                    </span>
                                    {objCategory.title}
                                </a>
                            </div>
                        )
                    })}


                </div>
            </div>
        </>
    )
}

// class BannerOneCategories extends Component {
//     state = {
//         title: 'o Seleccione una categoria:',
//         items: [
//             {
//                 path: "/listing-grid",
//                 title: "Ropa",
//                 icon: <RiTShirt2Line />
//             },
//             {
//                 path: "/listing-grid",
//                 title: "Comida",
//                 icon: <GiChickenOven />
//             },
//             {
//                 path: "/listing-grid",
//                 title: "Tecnologia",
//                 icon: <RiComputerLine />
//             },
//             {
//                 path: "/listing-grid",
//                 title: "Regalos",
//                 icon: <RiRedditLine />
//             },
//             {
//                 path: "/listing-grid",
//                 title: "Hogar",
//                 icon: <RiHome8Line />
//             },
//             {
//                 path: "/listing-grid",
//                 title: "Mascotas",
//                 icon: <RiMickeyLine />
//             }

//         ]
//     };
//     render() {
//         return (
//             <>
//                 <div className="highlighted-categories">
//                     <h5 className="highlighted__title">
//                         {this.state.title}
//                     </h5>
//                     <div className="highlight-lists d-flex justify-content-center mt-4">
//                         {this.state.items.map((item, index) => {
//                             return (
//                                 <div className="category-item" key={index}>
//                                     <a href={item.path} className="d-block">
//                                         <span className="icon-element">{item.icon}</span>
//                                         {item.title}
//                                     </a>
//                                 </div>
//                             )
//                         })}


//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

export default BannerOneCategories;