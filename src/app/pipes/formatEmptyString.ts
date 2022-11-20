import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'formatEmptyString',
})

export class EmptyString implements PipeTransform {
  transform(name: string): string {
    return name ? name : '...';
  }
}
