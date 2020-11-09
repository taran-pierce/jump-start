import './splitContent.scss';

function SplitContent(props) {
  const {
    headline,
    bodyCopy,
    imageOnLeft,
    image,
  } = props.content?.data;

  return (
    <section className={`split-content`}>
      <div className={`container`}>
        {(headline || bodyCopy) && (
          <div className={`text-content`}>
          {headline && (
            <h2>{headline}</h2>
          )}
          {bodyCopy && bodyCopy.content.map((paragraph, index) => (
            <p key={index}>{paragraph.content[0].value}</p>
          ))}
        </div>
        )}
        {image && (
        <div className={`image-content`}>
          <img src={image.file.url} alt={image.title} />
        </div>
        )}
      </div>
    </section>
  )
}

export default SplitContent;