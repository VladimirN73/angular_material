import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: AddressFormComponent
    }
  ]
})
export class AddressFormComponent implements ControlValueAccessor, OnInit, OnDestroy {

  @Input()
  legend:string

  onTouched= () => {};

  onChangeSub: Subscription;

  form: FormGroup = this.fb.group({
    addressLine1:[null, [Validators.required]],
    addressLine2:[null, [Validators.required]],
    zipCode:[null, [Validators.required]],
    city:[null, [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
  
  writeValue(value: any): void {
    if (value){
      this.form.setValue(value);
    }
  }

  registerOnChange(onChange: any): void {
    this.onChangeSub = this.form.valueChanges.subscribe(onChange)
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState?(disabled: boolean): void {
    if (disabled) 
    {
      this.form.disable();
    } 
    else 
    {
      this.form.enable();
    }
  }

  
  ngOnDestroy(): void {
    if (this.onChangeSub) { this.onChangeSub.unsubscribe(); }
  }

}
