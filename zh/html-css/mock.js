const template = document.getElementById('template').innerHTML;
const container = document.querySelector('.container');

Array.from({ length: 10 })
    .map((_, i) => {
        const tmp = `This is the description`;
        const description = Array.from({ length: 9 }).map(() => tmp).join(' ');

        return {
            title: `Title ${i + 1}`,
            description,
        }
    })
    .forEach(item => {
        const searchResultItem = document.createElement('div');
        searchResultItem.classList.add('search-result-item');
        searchResultItem.innerHTML = template
            .replace('{{title}}', item.title)
            .replace('{{description}}', item.description);

        container.appendChild(searchResultItem);
    });
