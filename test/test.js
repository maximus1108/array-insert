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

    it('Insert single character strings at first and last indices', () => {
        const arr = ['a', 'b', 'c', 'd'];
    
        arr.insert('a').insert('z')
        
        expect(arr).toEqual(['a', 'a', 'b', 'c', 'd', 'z']);
    })


    it('Insert multiple character strings', () => {
        const arr = ['apple', 'banana', 'curious', 'hello'];
    
        arr.insert('ant').insert('bang').insert('cat').insert('hand').insert('hi').insert('max');

        expect(arr).toEqual(['ant', 'apple', 'banana', 'bang', 'cat', 'curious', 'hand','hello', 'hi', 'max']);
    })

    it('Insert using object properties', () => {
        const arr = [{
            make: 'ford',
            price: 5000
        }, {
            make: 'vauxhall',
            price: 10000
        }, {
            make: 'bmw',
            price: 25000
        },{
            make: 'mercedes',
            price: 30000
        },{
            make: 'aston martin',
            price: 50000
        },{
            make: 'ferrari',
            price: 100000
        }];
    
        arr.insert({
            make: 'seat',
            price: 4000
        }, (currentValue, insertValue) => currentValue.price < insertValue.price)
        .insert({
            make: 'lamborgini',
            price: 99000
        },  (currentValue, insertValue) => currentValue.price < insertValue.price);

        expect(arr).toEqual([{
            make: 'seat',
            price: 4000
        }, {
            make: 'ford',
            price: 5000
        }, {
            make: 'vauxhall',
            price: 10000
        }, {
            make: 'bmw',
            price: 25000
        },{
            make: 'mercedes',
            price: 30000
        },{
            make: 'aston martin',
            price: 50000
        },{
            make: 'lamborgini',
            price: 99000
        },{
            make: 'ferrari',
            price: 100000
        }]);
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
      