# Peque DI

![coverage](https://raw.githubusercontent.com/peque-ts/di/main/coverage-badge.svg)

Peque DI is an [IoC](https://en.wikipedia.org/wiki/Inversion_of_control) container for TypeScript and JavaScript applications.

## Install

```shell
npm install @pequehq/di reflect-metadata
```

**Note**: tsconfig's `compilerOptions` must have both `experimentalDecorators` and `emitDecoratorMetadata` set to **true**.

## Example

```typescript
import { Container, Injectable } from '@pequehq/di';

// Decorate with @Injectable() classes to be set to the IoC container.

@Injectable()
class Foo {
  getPizza() {
    return 'pizza';
  }
}

@Injectable()
class Bar {
  constructor(private foo: Foo) {}
  
  test() {
    console.log(this.foo.getPizza())
  }
}

// Create a container. This const can be exported to easily access the container across other project files.

const DI = new Container();

// Use `set` to bind injectable classes to the container.

DI.set(Foo, 'Foo');
DI.set(Bar, 'Bar');

// Retrieve class instances with `get` (or using constructor properties).

DI.get<Bar>('Bar').test(); // logs "pizza"
```
