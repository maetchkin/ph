import {expect}         from 'chai';
import PaginationHelper from './PaginationHelper.js';

describe('PaginationHelper', () => {

    it('function', () => {
        expect(PaginationHelper).to.be.a.function;
    });

    it('constructor', () => {
        expect(new PaginationHelper).to.be.instanceof(PaginationHelper);
    });

    it('structure', () => {
        var empty = new PaginationHelper;
        expect(empty).to.have.property('collection')  .that.is.an('array');
        expect(empty).to.have.property('itemsPerPage').that.is.a('number');
        expect(empty).respondTo('itemCount');
        expect(empty).respondTo('pageCount');
        expect(empty).respondTo('pageItemCount');
        expect(empty).respondTo('pageIndex');
    });

    var data = {
        collection:   ['a','b','c','d','e','f'],
        itemsPerPage: 4
    };

    it(`test new PaginationHelper( [${data.collection}], ${data.itemsPerPage} ) `, () => {
        var helper = new PaginationHelper(
                            data.collection,
                            data.itemsPerPage
                        );

        expect( helper.itemCount() ).to.equal( 6 );
        expect( helper.pageCount() ).to.equal( 2 );

        expect( helper.pageItemCount( 0 )).to.equal( 4 );
        expect( helper.pageItemCount( 1 )).to.equal( 2 );
        expect( helper.pageItemCount( 2 )).to.equal(-1 );

        expect( helper.pageIndex(   5 )).to.equal( 1 );
        expect( helper.pageIndex(   2 )).to.equal( 0 );
        expect( helper.pageIndex(  20 )).to.equal(-1 );
        expect( helper.pageIndex( -10 )).to.equal(-1 );

    });
})