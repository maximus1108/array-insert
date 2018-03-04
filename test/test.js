import '../src/index.js';

describe("Insert and retain ascending order", () => {
    
    it("Insert integers", () => {
        const arr = [2, 3, 4, 6];

        arr.insert(1).insert(5)

        expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it("Insert integers at first and last indices", () => {
        const arr = [2, 3, 4, 5];

        arr.insert(1).insert(6)

        expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
    });


    it('Insert single character strings', () => {
        const arr = ['a', 'b', 'd', 'f'];
    
        arr.insert('c').insert('e')
        
        expect(arr).toEqual(['a', 'b', 'c', 'd', 'e','f']);
    })

  });

describe("Insert and retain descending order", function() {
    const arr = [6, 4, 3, 2];
  
    it("Basic integer insert", function() {
      arr.insert(1, (currentValue, insertValue) => currentValue > insertValue)
         .insert(5, (currentValue, insertValue) => currentValue > insertValue);

      expect(arr).toEqual([6, 5, 4, 3, 2, 1]);
    });
  });

  describe
      