const sort = document.querySelectorAll('.js-sort');

sort.forEach(button => {
    button.addEventListener('click', () => {
        sort.forEach(obj => {
            obj.classList.remove('is-active')
        })
        button.classList.add('is-active');

        const selectedTag = button.textContent;
        const sections = document.querySelectorAll('.js-item');

        sections.forEach(section => {
            const tagElements = section.querySelectorAll('.js-tag');
            let hasMatchingTag = false;

            tagElements.forEach(p => {
                if (p.textContent.trim() === selectedTag) {
                    hasMatchingTag = true;
                }
            });

            if (selectedTag === 'すべて' || hasMatchingTag) {
                section.classList.remove('is-none');
            } else {
                section.classList.add('is-none');
            }
        });
    });
});

// sort.forEach(e => {
//     e.addEventListener('click', () => {
//         sort.forEach(obj => {
//             obj.classList.remove('is-active')
//         })
//         e.classList.add('is-active');

//         item.forEach(item => {
//             item.classList.add('is-none');
//         })
//         tag.forEach(tag => {
//             if (e.innerHTML == 'すべて') {
//                 item.forEach(item => {
//                     item.classList.remove('is-none');
//                 })
//             } else (e.innerHTML == tag.innerHTML)
//             {
//                 tag.closest(".js-item").classList.remove('is-none');
//                 console.log(tag.innerHTML);
//             }
//         })
//     })
// });