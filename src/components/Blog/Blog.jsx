import React, { useState } from 'react'
import './Blog.scss'

const Blog = ({ closeModal }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    function handleClick() {
        setActiveIndex(null);
    }

    const blogs = [
        {
            id: 1,
            title: "Data Storytelling: The Way to Stakeholder's Hearts Part One",
            link: "https://medium.com/@amandinancy16/data-storytelling-the-way-to-stakeholders-hearts-part-1-fbfd0a308ad0"
        },
        {
            id: 2,
            title: "Data Storytelling: The Way to Stakeholder's Hearts Part Two",
            link: "https://medium.com/@amandinancy16/data-storytelling-the-way-to-stakeholders-hearts-part-2-5b0040c91f1"
        },
        {
            id: 3,
            title: "Data Storytelling: The Way to Stakeholder's Hearts Part Three",
            link: "https://medium.com/@amandinancy16/data-storytelling-the-way-to-stakeholders-hearts-aba4454de0a"
        },
        {
            id: 4,
            title: "Reverse Geocoding with Geopy",
            link: "https://medium.com/@amandinancy16/reverse-geocoding-with-geopy-c26cfb63f74c"
        },
        {
            id: 5,
            title: "Reverse Geocoding using PostGIS and Tiger Dataset",
            link: "https://medium.com/@amandinancy16/reverse-geocoding-using-postgis-and-tiger-dataset-b59b60ca071b"
        },
    ];

    return (
        <div className='blog'>
        <div className='box'>
            <h2>Blog</h2>
            <button onClick={closeModal}>
                <i class="fa-solid fa-arrow-left fa-2x"></i>
            </button>

            <div className='content'>
            {blogs.map((blog, index) => (
                <a
                    className={`blogs ${activeIndex === blog.id ? 'active' : ''}`}
                    key={blog.id}
                    onMouseEnter={() => setActiveIndex(blog.id)}
                    onMouseLeave={() => setActiveIndex(null)}
                    target='_blank'
                    href={blog.link}
                    >

                    <i className={`fa-solid fa-${activeIndex === blog.id ? 'book-open' : 'book'} fa-3x`}></i>
                    <h4>{blog.title}</h4>
                </a>
            ))}
            </div>

            <a href='https://medium.com/@amandinancy16' target='_blank' rel='noopener noreferrer' id='link'>
            See More <i className='fa-solid fa-arrow-right'></i>
            </a>
        </div>
        </div>
    );
};

export default Blog;
  