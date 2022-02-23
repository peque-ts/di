import { InjectDecoratorMetadata } from './inject.decorator.metadata';
import { IInjectOptions } from '../types';

export function Inject(identifier: string, options?: IInjectOptions): PropertyDecorator & ParameterDecorator {
  return (target, propertyKey?, parameterIndex?): void => {
    const clazz = parameterIndex === undefined ? target.constructor : target;
    const metadata = InjectDecoratorMetadata.get(clazz) ?? [];

    metadata.push({
      identifier,
      propertyKey,
      parameterIndex,
      options,
    });

    InjectDecoratorMetadata.set(metadata, clazz);
  };
}
