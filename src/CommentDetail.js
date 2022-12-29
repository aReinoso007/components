import React from "react";

const CommentDetail = () => {
    return (
        <div className='comment'>
            <a href='/' className='avatar'>
                <img alt='avatar' src={faker.image.avatar()} />
            </a>
            <div className='content'>
                <a href='/' className='author'>
                    Alex
                </a>
                <div className='metadata'>
                    <span className='date'>Today at 6:45 PM</span>
                </div>
                <div className='text'>Nicely done my dude. You is a hacker.</div>
            </div>
        </div>
    );
};
