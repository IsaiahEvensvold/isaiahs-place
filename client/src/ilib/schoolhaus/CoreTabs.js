import Tab from "./Tab";


const Titles = {
    Navigation: 'Navigation',
}


const CoreTabs = {
    Navigation: () => {
        var Navigation = new Tab(
            Titles.Navigation
        );
        
        return Navigation;
    },
}

export default CoreTabs;