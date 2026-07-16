import { Injectable, signal } from '@angular/core';

export type AppLanguage = 'es' | 'en';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly _language = signal<AppLanguage>('es');
  readonly language = this._language.asReadonly();

  setLanguage(lang: AppLanguage) {
    this._language.set(lang);
  }

  toggleLanguage() {
    this._language.update((lang) => (lang === 'es' ? 'en' : 'es'));
  }
}
