import React, {Component} from 'react';
import Button from "../../common/Button";

class WidgetAddCart extends Component {
    state = {
        items: [{
            price: '204',
        }  ]
    }
    render() {
        return (
            <>
                <div className="sidebar-widget">
                    <div className="sidebar-price">
                        S/. 204
                    </div>
                    <div className="section-block-2 margin-top-35px margin-bottom-35px"></div>
                    <div className="btn-box text-center">
                        <Button text="Solicitar" url="/cart" className="d-block">
                            <span className="d-inline-block"></span>
                        </Button>
                    </div>
                </div>
            </>
        );
    }
}

export default WidgetAddCart;