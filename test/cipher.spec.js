describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33', ()=>{
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('debería retornar "234" para "123" con offest 1', ()=>{
      assert.equal(cipher.encode(1,"123"),'234');
    });
    it('debería retornar "BcD" para "ABC" con offest 1 y dificultad = si', ()=>{
      assert.equal(cipher.encode(1,"ABC",null,null,"si"),'BcD');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',()=>{
      assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
    it('debería retornar "123" para "234" con offest 1',()=>{
      assert.equal(cipher.decode(1,"234"),'123');
    });
  });



});
