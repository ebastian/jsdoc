describe("@type tag", function() {
    var docSet = jasmine.getDocSetFromFile('test/fixtures/typetag.js'),
        foo = docSet.getByLongname('foo')[0],
        bar = docSet.getByLongname('bar')[0];

    it('When a symbol has an @type tag, the doclet has a type property set to that value\'s type.', function() {
        expect(typeof foo.type).toBe('object');
        expect(typeof foo.type.names).toBe('object');
        expect(foo.type.names.join(', ')).toBe('string, Array<string>');
    });

    it('When a symbol has an @type tag set to a plain string, the doclet has a type property set to that string as if it were a type.', function() {
        expect(bar.type.names.join(', ')).toBe('integer');
    });
});