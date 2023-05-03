import React from 'react'


export default function ArticleLanding(props) {

    const { svgArticle, imgArticle, titleArticle, textArticle } = props;

    return (
        <div className='landing-card'>
            <div className='landing-card-img'>
                <div>
                    <img src={svgArticle} alt='imagen del articulo' />
                </div>
                <div>
                <img src={imgArticle} alt='imagen del articulo' />
                </div>
            </div>
            <div className='landing-card-text'>
            <h2>{titleArticle}</h2>
                <p>{textArticle}</p>
            </div>
        </div>
    )
}
