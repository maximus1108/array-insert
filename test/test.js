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
    });

  });

describe("Insert and retain descending order", () => {

    const descendingSort = (currentValue, insertValue) => currentValue > insertValue;
   
    it("Insert integer", () => {
      const arr = [6, 4, 3, 2];
      arr.insert(1, descendingSort)
         .insert(5, descendingSort);

      expect(arr).toEqual([6, 5, 4, 3, 2, 1]);
    });

    it("Insert integers at first and last indices", () => {
        const arr = [5, 4, 3, 2];

        arr.insert(1, descendingSort)
           .insert(6, descendingSort);

        expect(arr).toEqual([6, 5, 4, 3, 2, 1]);
    });


    it('Insert single character strings', () => {
        const arr = ['f', 'd', 'b', 'a'];
    
        arr.insert('c', descendingSort)
           .insert('e', descendingSort)
        
        expect(arr).toEqual(['f', 'e', 'd', 'c', 'b','a']);
    })

    it('Insert single character strings at first and last indices', () => {
        const arr = ['d', 'c', 'b', 'a'];
    
        arr.insert('a', descendingSort).insert('z', descendingSort)
        
        expect(arr).toEqual(['z', 'd', 'c', 'b', 'a', 'a']);
    })


    it('Insert multiple character strings', () => {
        const arr = ["hello", "curious", "banana", "apple"];
    
        arr.insert('ant', descendingSort)
           .insert('bang', descendingSort)
           .insert('cat', descendingSort)
           .insert('hand', descendingSort)
           .insert('hi', descendingSort)
           .insert('max', descendingSort);

        expect(arr).toEqual(["max", "hi", "hello", "hand", "curious", "cat", "bang", "banana", "apple", "ant"]);
    })

    it('Insert using object properties', () => {

        const arr = [{
            make: 'vauxhall',
            price: 100000
        }, {
            make: 'ford',
            price: 100000
        }, {
            make: 'ferrari',
            price: 50000
        },{
            make: 'chrysler',
            price: 30000
        },{
            make: 'bmw',
            price: 25000
        },{
            make: 'bentley',
            price: 5000
        }];

        const sortByMakeDecending = (currentValue, insertValue) => currentValue.make > insertValue.make;
    
        arr.insert({
            make: 'seat',
            price: 4000
        }, sortByMakeDecending)
        .insert({
            make: 'lamborgini',
            price: 99000
        }, sortByMakeDecending)
        .insert({
            make: 'audi',
            price: 99000
        }, sortByMakeDecending);

        expect(arr).toEqual([{
            make: 'vauxhall',
            price: 100000
        }, {
            make: 'seat',
            price: 4000
        }, {
            make: 'lamborgini',
            price: 99000
        }, {
            make: 'ford',
            price: 100000
        }, {
            make: 'ferrari',
            price: 50000
        }, {
            make: 'chrysler',
            price: 30000
        }, {
            make: 'bmw',
            price: 25000
        }, {
            make: 'bentley',
            price: 5000
        }, {
            make: 'audi',
            price: 99000
        }]);
    });
  });
      