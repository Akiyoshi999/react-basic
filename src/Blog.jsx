import React from 'react';
import Article from './Article';

class Blog extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const authorName="Saito"
        return(
            <>
                <Article 
                title={"React"}
                // order={3}
                // isPublished={true}
                // authorName={authorName}
                />
                <Article title={"JSXの使い方"} />
                <Article title={"環境構築をしてみよう"} />
            </>
        )
    }
}

export default Blog