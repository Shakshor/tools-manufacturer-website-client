import React from 'react';

const Blog = () => {
    return (
        <div tabindex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-5">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
                Focus me to see content
            </div>
            <div className="collapse-content">
                <p>tabindex="0" attribute is necessary to make the div focusable</p>
            </div>
        </div>
    );
};

export default Blog;