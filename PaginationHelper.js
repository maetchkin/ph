
export default class PaginationHelper {

    constructor (collection = [], itemsPerPage = 0) {
        if (!Array.isArray(collection)) {
            throw new TypeError('first argument MUST be an Array');
        }
        if (!Number.isInteger(itemsPerPage)) {
            throw new TypeError('second argument MUST be an Integer');
        }

        this.collection   = collection;
        this.itemsPerPage = itemsPerPage;
        this.pages        = [];

        if (collection.length > 0 && itemsPerPage > 0){
            var pos = 0;
            while ( pos <= collection.length ) {
                this.pages.push(
                    collection.slice(
                        pos,
                        pos += itemsPerPage
                    )
                );
            }
        }
    }

    itemCount = () => this.collection.length

    pageCount = () => this.collection.length > 0 && this.itemsPerPage > 0
            ? Math.ceil(this.collection.length / this.itemsPerPage)
            : 0

    pageItemCount = pageIndex =>
        pageIndex in this.pages
            ? this.pages[pageIndex].length
            : -1

    pageIndex = itemIndex =>
        itemIndex >= 0 && itemIndex < this.collection.length
            ? Math.trunc(itemIndex / this.itemsPerPage)
            : -1
}