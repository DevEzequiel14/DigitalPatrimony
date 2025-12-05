import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  public _language = signal<'es' | 'en'>('es');
  language = this._language.asReadonly();

  setLanguage(lang: 'es' | 'en') {
    this._language.set(lang);
  }

}
