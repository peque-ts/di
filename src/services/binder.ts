import { IScope, ProviderClass } from '../types';

export class Binder {
  readonly #provider: ProviderClass;
  #targetProvider: ProviderClass;
  #scope: IScope;

  constructor(provider: ProviderClass) {
    this.#provider = provider;
    this.to(this.#provider);
    this.#scope = 'default';
  }

  to(targetProvider: ProviderClass): this {
    this.#targetProvider = targetProvider;
    return this;
  }

  nonSingleton(): void {
    this.#scope = 'non-singleton';
  }

  getTargetProvider(): ProviderClass {
    return this.#targetProvider;
  }

  getScope(): IScope {
    return this.#scope;
  }
}
