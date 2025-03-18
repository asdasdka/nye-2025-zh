module.exports.createHttpHeaders = (input) => {
    return input.reduce((headers, [name, ...values]) => {
        headers[name.toLowerCase()] = values.join(", ");
        return headers;
    }, {});
};

const parseTitle = (html) => {
    const match = html.match(/<main>(.*?)<\/main>/);
    return match ? match[1] : "";
};

module.exports.getItems = (items, params) => {
    const { page, pageSize, sort } = params;
    
    const sortedItems = [...items].sort((a, b) => {
        if (sort === 'asc') return a.id - b.id;
        if (sort === 'desc') return b.id - a.id;
        return 0;
    });
    
    const paginatedItems = sortedItems.slice((page - 1) * pageSize, page * pageSize);
    
    return paginatedItems.map(({ id, displayTitle }) => ({
        id,
        title: { main: displayTitle }
    }));
};
