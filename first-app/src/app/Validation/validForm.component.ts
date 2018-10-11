import { Component } from "@angular/core";

@Component({
    selector: 'app-validForm',
    templateUrl: 'validForm.component.html'
})

export class ValidFormComponent {

    value : any;

    log(contactForm) {
        this.value = contactForm;
        console.log (contactForm);
    }
}