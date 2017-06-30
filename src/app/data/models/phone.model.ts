import { FormGroup, FormControl, Validators } from "@angular/forms";

export class Phone {
    constructor(public number: string = "") { }

    static getFormGroup(phone: Phone = new Phone()): FormGroup {
        return new FormGroup({
            'number': new FormControl(phone.number, Validators.required)
        });
    }

    static fromFormGroup(phoneForm: FormGroup): Phone {
        return new Phone(
            phoneForm.value['number']
        );
    }
}