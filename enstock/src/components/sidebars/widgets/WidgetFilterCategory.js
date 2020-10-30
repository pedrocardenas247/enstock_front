import React, {Component} from 'react';
import $ from 'jquery'

class WidgetFilterCategory extends Component {
    componentDidMount() {
        $(document).ready(function () {
            let catbox = document.querySelector('.sidebar-widget .filter-by-category');
            let height = catbox.offsetHeight
            $(".sidebar-widget .filter-by-category").css({height: '244px', overflow: 'hidden'})

            $(document).on('click', '#showfilterbycategory', function () {
                $(".sidebar-widget .filter-by-category").css({height: height, overflow: 'hidden'})
                $(this).addClass('lessfilterbyfeature');
            })
            $(document).on('click', '.lessfilterbyfeature', function () {
                $(".sidebar-widget .filter-by-category").css({height: '244px', overflow: 'hidden'})
                $(this).removeClass('lessfilterbyfeature');
            })
        })
    }
    state = {
        title: 'Elija una Categoria',
        categories: [
            {
                id: 1,
                cat: 'Casacas',
                catNum: 11
            },
            {
                id: 2,
                cat: 'Polos',
                catNum: 22
            },
            {
                id: 3,
                cat: 'Pantalones',
                catNum: 9
            },
            {
                id: 4,
                cat: 'Blusas',
                catNum: 11
            },
            {
                id: 5,
                cat: 'Chompas',
                catNum: 12
            },
            {
                id: 6,
                cat: 'Cardigans',
                catNum: 48
            },
        ]
    }
    render() {
        return (
            <>
                <div className="sidebar-widget">
                    <h3 className="widget-title">
                        {this.state.title}
                    </h3>
                    <div className="title-shape"></div>
                    <div className="check-box-list show-more-item filter-by-category mt-4 mb-4">

                        {this.state.categories.map(item => {
                            return (
                                <div className="custom-checkbox" key={item.id}>
                                    <input type="checkbox" id={'chb'+item.id} />
                                    <label htmlFor={'chb'+item.id}>
                                        {item.cat} <span>{item.catNum}</span>
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        );
    }
}

export default WidgetFilterCategory;