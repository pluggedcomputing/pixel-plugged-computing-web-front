import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: { message: string; classname: string; delay: number }[] = [];

  show(message: string, options: { classname?: string; delay?: number } = {}): void {
    this.toasts.push({
      message,
      classname: options.classname || 'toast-info',
      delay: options.delay || 3000,
    });
    if (options.delay) {
      setTimeout(() => this.remove(this.toasts[0]), options.delay);
    }
  }

  remove(toast: { message: string; classname: string; delay: number }): void {
    const index = this.toasts.indexOf(toast);
    if (index >= 0) {
      this.toasts.splice(index, 1);
    }
  }
}
