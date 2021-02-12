import React from 'react';
import Article from './Article';

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isPublished: false,
            order: 1
        }
    }

    // 公開状態を反転させる関数
    togglePublished = () => {
        this.setState({
            isPublished: !this.state.isPublished
        })
    }

    render(){
        const authorName="Saito"
        return(
            <>
                <Article 
                title={"React"}
                // order={3}
                isPublished={this.state.isPublished}
                toggle={()=> this.togglePublished()}
                // authorName={authorName}

                />
                {/* <Article title={"JSXの使い方"} /> */}
            </>
        )
    }
}

export default Blog