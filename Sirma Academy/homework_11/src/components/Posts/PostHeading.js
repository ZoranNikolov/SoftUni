export const PostHeading = ({
	title,
	quote,
	author,
	imageSource,
	altText,
	imageWidth,
}) => {
	return (
		<>
			<h1>{title}</h1>
			{quote && (
				<p>
					<em>{quote}</em> {author}
				</p>
			)}
			<img src={imageSource} alt={altText} width={imageWidth} />
		</>
	);
};
