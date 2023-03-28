import { LightningElement, api,track } from 'lwc';
import { FlowNavigationNextEvent } from 'lightning/flowSupport';

export default class FlowNavigateButtons extends LightningElement {
    @api availableActions = [];
    @api label='Button'; //Label of the button
    @api buttonId='Button1'; //Unique button Id
    @api selectedButtonId; //Property that'll store the buttonId
    @api variant='brand';
    @api AutoNext=0;
    @track hidden=true;

    handleNavigation() {
        this.selectedButtonId = this.buttonId; //Setting the buttonId when button is clicked.
        /** Navigating to next screen */
        if (this.availableActions.find(action => action === 'NEXT')) {
            const navigateNextEvent = new FlowNavigationNextEvent();
            this.dispatchEvent(navigateNextEvent);
        }
    }
    connectedCallback(){
        const navigateNextEvent = new FlowNavigationNextEvent();
        if (this.AutoNext>0 && this.availableActions.find(action => action === 'NEXT')) {
            const navigateNextEvent = new FlowNavigationNextEvent();
            this.dispatchEvent(navigateNextEvent);
        }else{
            this.hidden=false;
        }
    }
}