import React from 'react';
import { Link } from 'react-router-dom';
import { SITENAME } from '../utils/init';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="row">
                            <div className="col-md-12">
                                <div className="copyright text-center">
                                    <p>Copyright © 2020 Rupam Jana. All rights reserved. </p>
                                </div>
                            </div>
                        </div>
        )
    }
}