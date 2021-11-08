import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfterViewInit, Directive, ElementRef, Renderer2, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appShowPassword]'
})
export class ShowPasswordDirective implements AfterViewInit {
  inputElement: HTMLInputElement;
  showPassword = false;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2) 
    { }

  ngAfterViewInit(): void {
    this.inputElement = this.elRef.nativeElement;
    this.createShowPasswordButton();
  }

  createShowPasswordButton(): void {
    const button = this.renderer.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('btn');
    button.classList.add('btn-input-right');
    button.innerHTML = '<i class="fas fa-eye"></i>';
    this.renderer.appendChild(this.inputElement.parentElement, button);
    this.renderer.listen(button, 'click', () => {
      this.showPassword = !this.showPassword;
      if (this.showPassword) {
        this.inputElement.setAttribute('type', 'text');
        button.innerHTML = '<i class="fas fa-eye-slash"></i>';
      } else {
        this.inputElement.setAttribute('type', 'password');
        button.innerHTML = '<i class="fas fa-eye"></i>';
      }
    });
  }

}


@NgModule({
  declarations: [ShowPasswordDirective],
  imports: [
    CommonModule
  ],
  exports: [ShowPasswordDirective]
})
export class InputShowPasswordModule { }
