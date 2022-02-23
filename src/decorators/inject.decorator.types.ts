import { IScope } from '../types';

interface IInjectOptions {
  scope: IScope;
}

interface IInjectMetadata {
  identifier: string;
  propertyKey?: string;
  parameterIndex?: number;
  options?: IInjectOptions;
}

type InjectMetadataParam = Required<Omit<IInjectMetadata, 'propertyKey'>>;

type InjectMetadataProperty = Required<Omit<IInjectMetadata, 'parameterIndex'>>;

export type { IInjectMetadata, InjectMetadataParam, InjectMetadataProperty, IInjectOptions };
