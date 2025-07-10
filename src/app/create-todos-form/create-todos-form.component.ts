import { Component, EventEmitter, Output } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

export function completedValidator(): ValidatorFn{
    return  (control: AbstractControl): ValidationErrors | null => {
        const value = control.value?.trim().toLowerCase();
        if (value === 'да' || value === 'нет'){
            return null;
        }
        return {invalidCompleted: true};
    }
}

@Component({
    selector: 'app-create-todos-form',
    templateUrl: './create-todos-form.component.html',
    styleUrl: './create-todos-form.component.scss',
    standalone: true,
    imports: [ReactiveFormsModule, MatButtonModule, MatInputModule],
})

export class createTodosFormComponent{
    @Output()
    createTodos = new EventEmitter();

    public form = new FormGroup({
        title: new FormControl("", [Validators.required,Validators.minLength(3)]),
        userId: new FormControl("",[Validators.required,Validators.minLength(3)]),
        completed: new FormControl("",[Validators.required,completedValidator()]),
    })

    private getCompletedTodo(): boolean{
        const value = this.form.get('completed')?.value!.trim().toLowerCase();
        if (value === 'да'){
            return true
        }
        else return false;
    }

    public submitForm(): void {
        this.createTodos.emit(this.form.value);
        this.form.reset();
    }


}