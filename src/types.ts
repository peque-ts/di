interface ProviderClass<T = any> extends Function {
  new (...args: any[]): T;
}

type IScope = 'default' | 'non-singleton';

interface IInjectOptions {
  scope: IScope;
}

export type { ProviderClass, IScope, IInjectOptions };
