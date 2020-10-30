import React, {Component} from 'react';
import WidgetProductInfo from "./widgets/WidgetProductInfo";
import WidgetAddCart from './widgets/WidgetAddCart';

class ListingProductSidebar extends Component {
    
    render() {
        return (
            <>
                <div className="sidebar section-bg">
                    <WidgetAddCart />
                    <WidgetProductInfo/>
                    
                </div>
            </>
        );
    }
}

export default ListingProductSidebar;