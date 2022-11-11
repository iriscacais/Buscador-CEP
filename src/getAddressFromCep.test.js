
describe('Quando a requisição é rejeitada, ela deverá retornar erro', () => {
    test('Deve lançar erro "Você precisa passar um CEP" quando passar cep vazio', async () => {
      const emptyCep = '';
  
      await expect(getAddressFromCep(emptyCep)).rejects.toThrow(
        new Error('Você precisa passar um CEP')
      );
    });
  
    test('Deve lançar erro quando passar cep inválido', async () => {
      const invalidCep = 'XXXXX-XXX';
      const invalidCepLessDigits = '00000-00';
      const invalidCepMoreDigits = '00000-0000';
  
      await expect(getAddressFromCep(invalidCep)).rejects.toThrow();
      await expect(getAddressFromCep(invalidCepLessDigits)).rejects.toThrow();
      await expect(getAddressFromCep(invalidCepMoreDigits)).rejects.toThrow();
    });
  });