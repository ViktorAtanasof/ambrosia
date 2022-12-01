import { ValidatorFn } from "@angular/forms";

//TODO

export function appEmailValidator(domains: string[]): ValidatorFn {
    const domainString = domains.join('|');
    const re = new RegExp(`^[^@]{4,}@gmail\.(${domainString}$)`);
    return (control) => {
        return (control.value === '' || re.test(control.value)) ? null : { appEmailValidator: true};
    }
}