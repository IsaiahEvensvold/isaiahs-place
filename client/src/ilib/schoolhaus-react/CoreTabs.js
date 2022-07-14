import React from 'react';
import BaseCoreTabs from '../schoolhaus/CoreTabs.js';
import ReactTab from './ReactTab';


class NavigationContentComponent extends React.Component {
    render() {
        return(
            <span>
                Oof.. Here we go again.
            </span>
        );
    }
} //prob dont want this in here, temp.

const CoreTabs = {
    Navigation: () => {
        var Base = BaseCoreTabs.Navigation();

        var Navigation = new ReactTab(
            Base.title,
            NavigationContentComponent
        );
        
        return Navigation;
    },
}

export default CoreTabs;