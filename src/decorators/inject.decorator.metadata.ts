import { ReflectionMetadata } from '../helpers/reflection';
import { IInjectMetadata, InjectMetadataParam, InjectMetadataProperty } from './inject.decorator.types';

class Implementation extends ReflectionMetadata<IInjectMetadata[]> {
  constructor() {
    super(Symbol('inject'));
  }

  getPropertiesOnly(target: object): InjectMetadataProperty[] {
    return (this.get(target) ?? []).filter((data) => data.parameterIndex === undefined) as InjectMetadataProperty[];
  }

  getParamsOnly(target: object): InjectMetadataParam[] {
    return (this.get(target) ?? []).filter((data) => !data.propertyKey) as InjectMetadataParam[];
  }
}

export const InjectDecoratorMetadata = new Implementation();
