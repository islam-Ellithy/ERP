import React, {Component} from 'react';
import company from '../assets/company.jpg';
import logo from '../assets/logo.png';
import mediaLogo from '../assets/mediaLogo.png';
import '../styles/homeStyles.css';

export default class Home extends Component {

    render() {

        return (
            <div background={company}>

                <div className="row">

                    <div className="col-md-4" style={{padding:32}}>
                        <img src={mediaLogo}/>
                    </div>

                    <div className="col-md-8" style={{marginTop: 24,alignSelf:'flex-end'}}>
                        <div className="dropdown" style={{alignSelf: 'flex-end'}}>
                            <button
                                className="btn btn-primary dropdown-toggle"
                                type="button"
                                data-toggle="dropdown"
                                style={{height:'100%' }}>
                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="./services.html">Services</a>
                                </li>
                                <li>
                                    <a href="#">Our Clients</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Portoflio</a>
                                </li>
                                <li>
                                    <a href="#">Contact us</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                < div className="container">
                    <div className="row">

                        <div className="col-sm-2">
                            <br/>
                            <br/>
                            <a href="services.html">
                                <button className="btn btn-primary" style={{padding:20}}>Services</button>
                            </a>
                        </div>

                        <div className="col-sm-6">
                            <div className="fullLogo">
                                <img src={logo} style={{width:456,height:332}}/>
                                <div className="logo" style={{padding:12}}>
                                    <h1 className="textColor">1dot2Media</h1>
                                    <p className="textColor">We focus on providing the most creative,
                                        <br/>
                                        innovative and profitable ways for the
                                        <br/>
                                        business sector.
                                        <br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <br/>
                            <br/>
                            <button className="btn btn-primary" style={{padding:20}}>About</button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sw-6 white-block">
                        <p>We focus on providing the most creative,
                            <br/>
                            innovative and profitable ways for the
                            <br/>
                            business sector.
                            <br/>
                        </p>
                        <a data-toggle="collapse" data-target="#more-1">
                            <span className="glyphicon glyphicon-plus"></span>
                        </a>
                        <div className="caption">
                            <div id="more-1" className="collapse lead">this is more details info...</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
