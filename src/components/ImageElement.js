import React from 'react';

const ImageElement = ({title,text,src,alt}) => {
	return (
		<React.Fragment>
			<h1>{title}</h1>
			<img src={src} alt={alt} />
			<p>{text}</p>
		</React.Fragment>
	);
}

export default ImageElement;
