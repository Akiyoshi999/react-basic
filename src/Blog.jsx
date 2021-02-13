import React from 'react';
import Article from './Article';

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isPublished: false,
            count:0 
        }
    }

    componentDidMount(){
        // ボタンがクリックされたらいいねをカウントアップする
        document.getElementById('counter').addEventListener('click',this.countUp)
    }

    componentDidUpdate(){
        if(this.state.count >10){
            this.setState({
                count:0
            })
        }
    }

    componentWillUnmount(){
        document.getElementById('counter').removeEventListener('click',this.countUp)
    }

    // 公開状態を反転させる関数
    togglePublished = () => {
        this.setState({
            isPublished: !this.state.isPublished
        })
    }
    
    countUp = () => {
        this.setState({
            count: this.state.count+1
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
                count={this.state.count}
                // authorName={authorName}

                />
                {/* <Article title={"JSXの使い方"} /> */}
            </>
        )
    }
}

export default Blog