import React from "react";
import './ReactTabComponent.css';


class ReactTabComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            title: props.title,
            ContentComponent: props.ContentComponent,
        };
    }

    render() {
        return(
            <div className='SH_tab-container'>
                <div className='SH_tab-title'>
                    {this.state.title}
                </div>
                <div className='SH_tab-content-container'>
                    <this.state.ContentComponent />
                </div>
            </div>
        );
    }
}

export default ReactTabComponent;