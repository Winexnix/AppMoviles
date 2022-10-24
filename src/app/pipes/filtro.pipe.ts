import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(mObjects: { hacia: string; desde: string }[], input: string) {
  if (!input) return mObjects;
  return mObjects.filter(val => this.filterBy(val, input));
}

private filterBy(
  mObject: { hacia: string; desde: string },
  search: string
) {
  const reduced = Object.keys(mObject)
    .reduce((prev, current) => this.reduceKeys(prev, current, mObject), "")
    .toLocaleLowerCase();
  return reduced.indexOf(search.toLocaleLowerCase()) > -1;
}

private reduceKeys(
  prev: string,
  current: string,
  mObject: { hacia: string; desde: string }
): string {
  if (this.isProp(current)) {
    prev = `${prev}\$${mObject[current]}`;
  }
  return prev;
}

private isProp(key: string): boolean {
  return key.includes("desde") || key.includes("hacia");
}
}





