import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
 static defaultProps={
  country:"us",
  pageSize:10,
  category:"sports"


 }
 static propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string,
 }
  articles = [
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Kyle Torpey",
      title:
        "The Word of God Now Comes With Bitcoin Rewards and an $8.99 Premium Tier",
      description: "In 2026, even the Bible is gamified.",
      url: "https://gizmodo.com/the-word-of-god-now-comes-with-bitcoin-rewards-and-an-8-99-premium-tier-2000773017",
      urlToImage:
        "https://gizmodo.com/app/uploads/2026/06/Orange-Bible-Bitcoin-Rewards-1200x675.jpg",
      publishedAt: "2026-06-20T19:26:03Z",
      content:
        "At first glance, Orange Bible looks like a standard scripture app. But this app is not just for followers of Jesus Christ, it’s also for followers of Satoshi Nakamoto. On top of that, it shows that e… [+5059 chars]",
    },
    
    {
      source: {
        id: null,
        name: "CoinDesk",
      },
      author: "Omkar Godbole",
      title:
        "Bitcoin traders load up on bearish bets all the way down to $52,000",
      description:
        "Bitcoin traders are scrambling to buy options bets that would pay off if the selloff deepens.",
      url: "https://www.coindesk.com/markets/2026/06/19/bitcoin-traders-load-up-on-bearish-bets-all-the-way-down-to-usd52-000",
      urlToImage:
        "https://cdn.sanity.io/images/s3y3vcno/production/a657d93793b2682fd079a3019e7b59cae3005273-1280x960.jpg?auto=format&w=960&h=540&crop=focalpoint&fit=clip&q=75&fm=jpg",
      publishedAt: "2026-06-19T05:02:01Z",
      content:
        "A hawkish Federal Reserve is bolstering the U.S. dollar, bitcoin ETFs have seen persistent outflows, and Strategy, the largest publicly listed bitcoin holder, faces mounting pressure. \r\nStrategy's pr… [+603 chars]",
    },
    {
      source: {
        id: null,
        name: "CoinDesk",
      },
      author: "CoinDesk Indices",
      title:
        "CoinDesk 20 performance update: Index drops 1.4% as all constituents decline",
      description:
        "Bitcoin Cash (BCH) fell 4.1% and NEAR Protocol (NEAR) shed 4.3%, leading the index lower.",
      url: "https://www.coindesk.com/coindesk-indices/2026/06/10/coindesk-20-performance-update-index-drops-1-4-as-all-constituents-decline",
      urlToImage:
        "https://cdn.sanity.io/images/s3y3vcno/production/a5d6564e59e7292f80523c554fb4cdb50189e1e2-640x480.png?auto=format&w=960&h=540&crop=focalpoint&fit=clip&q=75&fm=jpg",
      publishedAt: "2026-06-10T13:23:13Z",
      content:
        "CoinDesk Indices presents its daily market update, highlighting the performance of leaders and laggards in the CoinDesk 20 Index.\r\nThe CoinDesk 20 is currently trading at 1663.81, down 1.4% (-24.03) … [+247 chars]",
    },
  ];
  constructor() {
    super();
    // console.log("Hello I am a constructor from news component");
    this.state = {
      article: this.articles,
      loading: false,
      page:1,
      totalResult: 0
    };
  }
  updateNews=async()=>{
       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=7d9069b897344f42a23f24bba87d998a`
       this.setState({loading:true});

    let data= await fetch(url);
    let passedData=await data.json()
    this.setState({article:passedData.articles,
      totalResult:passedData.totalResults,
      loading:false
    })
  }
  async componentDidMount(){
 this.updateNews();
  
  }
   componentDidUpdate(prevProps){
    if(prevProps.category!==this.props.category){
      this.setState({page:1},()=>{
        this.updateNews();
      })
    }
   }
    handleNextclick=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.state.page+1}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=7d9069b897344f42a23f24bba87d998a`
       this.setState({loading:true})

    let data= await fetch(url);
    let passedData=await data.json()
      

    this.setState({article:passedData.articles, page: this.state.page+1,loading:false},() => {
    window.scrollTo(0,0);
  });
   
  }
    handlePrevclick=async()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.state.page-1}&pageSize=${this.props.pageSize}&category=${this.props.category}&apiKey=7d9069b897344f42a23f24bba87d998a`
   this.setState({loading:true})
    let data= await fetch(url);
    let passedData=await data.json();
    
    
    this.setState({article:passedData.articles, page: this.state.page-1,loading:false},() => {
    window.scrollTo(0,0);
  });
    
  }

  render() {
    return (
      <>
        
        <div className="container my-3">
          
          { this.state.loading &&<Spinner/>}
          <div className="row">
            {!this.state.loading&&this.state.article.map((ele) => {
              return (
                <div className="col-md-4" key={ele.url}>
                  <Newsitem
                    
                    title={(ele.title||"").slice(0, 45)}
                    description={(ele.description||"").slice(0, 45)+"....."}
                    imageurl={ele.urlToImage}
                    newurl={ele.url}
                  />
                </div>
              );
            })}

          
          </div>
          <div className="d-flex justify-content-between container">
            <button type="button" className=" btn btn-dark" onClick={this.handlePrevclick} disabled={this.state.page === 1}> &larr; Previous</button>
            <button type="button" className="btn btn-dark" onClick={this.handleNextclick} disabled={this.state.page>=Math.ceil(this.state.totalResult/this.props.pageSize)}>Next &rarr;</button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
