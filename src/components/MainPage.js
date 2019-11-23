import React from 'react'
import NaviagationBar from "./NavigationBar"
import MainItemView from "./mainItemView"
import PrivacyPolicy from "./PrivacyPolicy"

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <div>
                <NaviagationBar/>
                <PrivacyPolicy/>
            </div>
        );
    }

}