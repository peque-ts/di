interface ProviderClass<T = any> extends Function {
  new (...args: any[]): T;
}

export type { ProviderClass };

export type IScope = 'default' | 'non-singleton';
