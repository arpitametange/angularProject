import { AbstractControl } from "@angular/forms";



export function passwordMatch(password:string,confirmPassoword:string){
   return function(form:AbstractControl){
        const passwordvalue=form.get(password).value
        const confirmpasswordvalue=form.get(confirmPassoword).value
        if(passwordvalue  === confirmpasswordvalue){
            return null;
        }
        return{passwordMismatchError:true}

    }
}