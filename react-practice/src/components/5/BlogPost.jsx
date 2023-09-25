import "./blogPost.css";

const BlogPost = () => {
  return (
    <div className="container">
      <div className="blogLeft">
        <p className="title">CATEGORY</p>
        <p className="subtitle">12 Jun 2019</p>
      </div>
      <div className="blogRight">
        <p className="blogTitle">
          Bitters hashtag waistcoat fashion axe chia unicorn
        </p>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet
          quo quae explicabo at molestiae eos. Alias ea, nulla obcaecati quam,
          nihil eligendi, magni pariatur nemo unde architecto rerum dolores.
        </p>
        <a className="link" href="http://www.google.com">
          Learn more
        </a>
      </div>
    </div>
  );
};

export default BlogPost;
