import 'core-js/es6/map';

export type EnumValueType = string | number;

// @TODO: fix names from values should be an array instead of a single element
export class EnumValues {
  static getNamesAndValues<T extends EnumValueType>(e: any): { name: string, value: T }[] {
    return this.getNames(e).map(_name => { return { name: _name, value: e[_name] as T }; });
  }

  static getNames(e: any): string[] {
    return Object.keys(e).filter(key => isNaN(+key))
  }

  static getNameFromValue<T extends EnumValueType>(e: any, value: T): string | null {
    const all = this.getNamesAndValues(e).filter(pair => pair.value === value);
    return all.length == 1 ? all[0].name : null;
  }

  static getValues<T extends EnumValueType>(e: any): T[] {
    return this.getNames(e).map(name => e[name]) as T[];
  }

  // @TODO: fix ES6 Map missing typing
  // static getNameMap<T extends EnumValueType>(e: any): Map<string, T> {
  //   return new Map(this.getNamesAndValues(e).map(pair => [pair.name, pair.value]));
  // }

  // @TODO: add getValueMap
  // static getValueMap<T extends EnumValueType>(e: any): Map<T, string[]> {
  //   // return new Map(this.getNamesAndValues(e).map(pair => [pair.name, pair.value]));
  // }
}
