import React, { useState } from 'react'
import './Blog.scss'
import blogs from '../../Database/Blog.json'

const Blog = ({ closeModal }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    function handleClick() {
        setActiveIndex(null);
    }

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
  