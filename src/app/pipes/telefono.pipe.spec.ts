import { TelefonoPipe } from './telefono.pipe';

describe('TelefonoPipe', () => {
  let pipe: TelefonoPipe;

  beforeEach(() => {
    pipe = new TelefonoPipe();
  });

  it('debe formatear correctamente un número de teléfono', () => {
    const formatted = pipe.transform('56912345678');
    expect(formatted).toBe('+569 1234 5678');
  });

  it('debe devolver una cadena vacía si el valor es null o undefined', () => {
    expect(pipe.transform(null)).toBe('');
    expect(pipe.transform(undefined)).toBe('');
  });

  it('debe devolver el mismo valor si no puede formatearlo', () => {
    const invalidNumber = '123';
    expect(pipe.transform(invalidNumber)).toBe(invalidNumber);
  });
});
