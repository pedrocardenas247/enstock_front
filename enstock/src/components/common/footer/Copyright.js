import React, {Component} from 'react';
import CopyrightMenu from "./CopyrightMenu";

class Copyright extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copy-right margin-top-25px padding-top-30px">
                            <p className="copy__desc">
                                &copy; Copyright enStock 2020.
                            </p>

                            <CopyrightMenu />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Copyright;