import Tab from '../schoolhaus/Tab.js';
import ReactTabComponent from './ReactTabComponent.js';


class ReactTab extends Tab {
    constructor(title='React tab title', ContentComponent) {
        super(title);
        this.ContentComponent = ContentComponent;

        this.Component = <ReactTabComponent 
                        title={this.title}
                        ContentComponent={this.ContentComponent} />;
    }
}

export default ReactTab;