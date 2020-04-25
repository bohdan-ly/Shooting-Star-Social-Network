import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  let countLike = props.like;
  document.addEventListener("click", function(e) {
    if (e.target.className==`${s.like}`) {
      //debugger
    }
  });

    return (  
      <div className={s.content}>
      <div className = {s.post}>
        <img src = 'https://4.bp.blogspot.com/-SyaWak2-CzU/U82yEeW8Q9I/AAAAAAAAAXw/9zqw8bX7NQQ/s1600/no-game-no-life-sora-badass.jpg'>
        </img>
      {props.value}
      </div>
    <span className = {s.like}>Like {props.like} </span>
      </div>
  )
}

export default Post;