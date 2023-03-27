export const PostBody = ({ paragraphs, contentHeader }) => {
	return (
		<>
			{contentHeader && <h2>{contentHeader}</h2>}
			{paragraphs.map((paragraph, index) => (
				<p
					key={index}
					dangerouslySetInnerHTML={{ __html: paragraph }}
				></p>
			))}
		</>
	);
};
