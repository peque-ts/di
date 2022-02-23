interface ProviderClass<T = any> extends Function {
  new (...args: any[]): T;
}

type IScope = 'default' | 'non-singleton';

export type { ProviderClass, IScope };
