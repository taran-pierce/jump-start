import './splitContent.scss';

function SplitContent(props) {
  const {
    headline,
    bodyCopy,
    imageOnLeft,
  } = props.content?.data;

  return (
    <section className={`split-content`}>
      <div className={`container`}>
        <div className={`text-content`}>
          {headline && (
            <h2>{headline}</h2>
          )}
          {bodyCopy && bodyCopy.content.map((paragraph) => (
            <p>{paragraph.content[0].value}</p>
          ))}
        </div>
        <div className={`image-content`}>
          <img src={`https://www.fillmurray.com/200/300`} />
        </div>
      </div>
    </section>
  )
}

export default SplitContent;