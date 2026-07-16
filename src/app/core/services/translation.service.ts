import { Injectable, computed, inject } from '@angular/core';
import { LanguageService, AppLanguage } from './lenguage.service';
import es from '../../../assets/i18n/es.json';
import en from '../../../assets/i18n/en.json';

type Dictionary = typeof es;

const DICTIONARIES: Record<AppLanguage, Dictionary> = {
  es,
  en,
};

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly languageService = inject(LanguageService);
  readonly dictionary = computed(() => DICTIONARIES[this.languageService.language()]);
  readonly t = computed(() => {
    const dictionary = this.dictionary();
    return (key: string) => this.resolve(dictionary, key);
  });

  instant(key: string): string {
    return this.resolve(this.dictionary(), key);
  }

  private resolve(dictionary: Dictionary, key: string): string {
    const value = key.split('.').reduce<unknown>((current, part) => {
      if (current && typeof current === 'object' && part in current) {
        return (current as Record<string, unknown>)[part];
      }
      return undefined;
    }, dictionary);
    return typeof value === 'string' ? value : key;
  }
}
