import 'reflect-metadata';

import { suite } from 'uvu';
import * as assert from 'uvu/assert';

import { Inject } from './inject.decorator';
import { InjectDecoratorMetadata } from './inject.decorator.metadata';
import { IInjectMetadata } from './inject.decorator.types';

const test = suite('Inject decorator');

test('should set metadata for @Inject property and parameter', () => {
  class TestInjectable {
    @Inject('PropertyIdentifier') injectProperty: unknown;
    @Inject('PropertyIdentifierOptions', { scope: 'non-singleton' }) injectPropertyOptions: unknown;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    constructor(
      @Inject('ParamIdentifier') injectParam: unknown,
      @Inject('ParamIdentifierOptions', { scope: 'non-singleton' }) injectParamOptions: unknown,
    ) {
      // noop.
    }
  }

  const metadata = InjectDecoratorMetadata.get(TestInjectable);

  const expectedMetadata: IInjectMetadata[] = [
    {
      identifier: 'PropertyIdentifier',
      propertyKey: 'injectProperty',
      parameterIndex: undefined,
      options: undefined,
    },
    {
      identifier: 'PropertyIdentifierOptions',
      propertyKey: 'injectPropertyOptions',
      parameterIndex: undefined,
      options: { scope: 'non-singleton' },
    },
    {
      identifier: 'ParamIdentifierOptions',
      propertyKey: undefined,
      parameterIndex: 1,
      options: { scope: 'non-singleton' },
    },
    {
      identifier: 'ParamIdentifier',
      propertyKey: undefined,
      parameterIndex: 0,
      options: undefined,
    },
  ];

  assert.equal(metadata, expectedMetadata);
});

test.run();
