import "./CourseCard.css";

function CourseCard({ img, tags, title, startPrice, types }) {
  return (
    <div className="CourseCard">
      <div class="cover">
        <img
          class="top loaded"
          alt=""
          src={img}
          loading="lazy"
          data-ll-status="loaded"
        ></img>
      </div>
      <div class="info">
        <ul class="tags">
          {tags.map((tag) => (
            <li class="tag">{tag}</li>
          ))}
        </ul>
        <h4 class="name">{title}</h4>
        <div class="prices">
          <span class="price">{startPrice.toLocaleString()}부터</span>
        </div>
        <ul class="types">
          {types.map((type) => (
            <li class="type">{type}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CourseCard;
