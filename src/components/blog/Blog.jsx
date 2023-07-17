import "./blog.scss";
import blog1 from "../../assets/blog01.png";
import blog2 from "../../assets/blog02.png";
import blog3 from "../../assets/blog03.png";
import blog4 from "../../assets/blog04.png";
import blog5 from "../../assets/blog05.png";

function Blog() {
  return (
    <div className="blog" id="open-ai">
      <h1>A lot is happening, We are blogging about it.</h1>
      <div className="blog__container">
        <BlogItem
          imgUrl={blog1}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
        <BlogItem
          imgUrl={blog2}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
        <BlogItem
          imgUrl={blog3}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
        <BlogItem
          imgUrl={blog4}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
        <BlogItem
          imgUrl={blog5}
          title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          date="Sep 26, 2021"
        />
      </div>
    </div>
  );
}

function BlogItem({ imgUrl, title, date }) {
  return (
    <div className="blog__item">
      <div className="blog__img">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="blog__content">
        <div>
          <p>{date}</p>
          <h2>{title}</h2>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}

export default Blog;
