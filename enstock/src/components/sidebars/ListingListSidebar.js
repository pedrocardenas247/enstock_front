import React from 'react';
import WidgetFilterCategory from "./widgets/WidgetFilterCategory";
import WidgetFilterPrice from "./widgets/WidgetFilterPrice";
import Button from "../common/Button";
import { BsChevronRight } from 'react-icons/bs'

function ListingListSidebar() {
    return (
        <>
            <div className="sidebar">
                <WidgetFilterCategory />
                <WidgetFilterPrice />
                <div className="sidebar-widget">
                    <div className="btn-box">
                        <Button text="Aplicar los Filtros" url="#" className="d-block w-100 text-center">
                            <span className="d-inline-block"><BsChevronRight /></span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListingListSidebar;