export const bookTemplate =  `
    <span
        class='book-card blockInLine textCenter mediumSpace'
        style='width: 30%'
    >
        <img
            class='book-img'
            alt='{{img.alt}}'
            height='{{img.height}}'
            src='{{img.source}}'
        >
        <div class='book-info'>
            <h3>{{book.name}}</h3>
            <p><strong>Author:</strong>{{book.author}}</p>
            <p><strong>Category:</strong>{{book.category}}</p>
            <p class='summary'>{{book.summary}}</p>
            <p class='takeaways'>{{book.takeaways}}</p>
        </div>
    </span>`