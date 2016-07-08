export default function() {
    this.urlPrefix = 'http://ec2-54-84-251-148.compute-1.amazonaws.com';

    this.get('/businesses', function(schema, request) {
        let businesses = schema.businesses.all(),
            page = parseInt(request.queryParams.page) || 1,
            perPage = parseInt(request.queryParams.per_page) || 50,
            pageCount = businesses.models.length / perPage,
            filteredBusinesses = businesses.filter(b => {
                return parseInt(b.id) > page * perPage - perPage &&
                       parseInt(b.id) <= page * perPage;
            }),
            businessesUrl = perPage === 50 ?
                '/businesses?page=' :
                '/businesses?per_page=' + perPage + '&page=',
            json = this.serialize(filteredBusinesses);

        json.pages = {};
        if (page > 1) {
            json.pages.first = businessesUrl + 1;
            json.pages.prev = businessesUrl + (page - 1);
        }
        if (page < pageCount) {
            json.pages.next = businessesUrl + (page + 1);
            json.pages.last = businessesUrl + pageCount;
        }

        return json;
    });

    this.get('/businesses/:id', function(schema, request) {
        let id = request.params.id;
        if (parseInt(id) < 0) {
            return { error: `Business with ID ${id} not found` };
        }
        let json = this.serialize(schema.businesses.find(request.params.id));
        return json.business;
    });
}
