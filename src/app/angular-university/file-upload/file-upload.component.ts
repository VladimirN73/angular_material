import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements ControlValueAccessor, OnInit {

  @Input()
  requiredFileType:string;

  fileName = '';
  fileUploadError = false;
  uploadProgress:number;

  onChange:Function = (fileName:string)=>{};

  onTouched: Function = () => {};

  disabled : boolean = false;

  constructor(private http:HttpClient) {

  }

  onClick(fileUpload: HTMLElement){
    this.onTouched();
    fileUpload.click();
  }

  onFileSelected(event){
    const file:File = event.target.files[0];
    if (file) {

      this.fileName = file.name;
      
      const formData = new FormData();
      
      formData.append("thumbnail", file);

      this.fileUploadError = false;
      this.http.post("/api/thumbnail-upload", formData, {
        reportProgress:true,
        observe: 'events'
      })
      .pipe(
        catchError(error=>{
          this.fileUploadError=true;
          return of(error);
        }),
        finalize(()=>{
          this.uploadProgress = null;
        })
      ).subscribe(event => {
        if (event.type == HttpEventType.UploadProgress){
          this.uploadProgress = Math.round(100*(event.loaded / event.total));
        }
        else if (event.type == HttpEventType.Response){
          this.onChange(this.fileName);
        }
      });
    }
  }

  writeValue(obj: any): void {
    this.fileName = obj;
    
  }
  
  registerOnChange(onChange: any): void {
    this.onChange = onChange;    
  }

  registerOnTouched(onTouched: any): void {

    this.onTouched = onTouched;
    
  }
  
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
  }

}
