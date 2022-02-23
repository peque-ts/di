import { IScope, ProviderClass } from '../types';

type ProviderHookHandler = (name: string, instance: ProviderInstance) => void;

interface ContainerOptions {
  onInit?: ProviderHookHandler;
  onDestroy?: ProviderHookHandler;
  providers?: ProviderClass[];
}

interface Dependency {
  provider: ProviderClass;
  identifier: string;
  scope: IScope;
}

type ProviderInstance = InstanceType<ProviderClass>;

export type { ContainerOptions, Dependency, ProviderInstance };
