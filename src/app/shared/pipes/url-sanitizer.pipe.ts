import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeUrl'
})
export class UrlSanitizerPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any) {
    return this.sanitizer.bypassSecurityTrustUrl(value);
  }
}
