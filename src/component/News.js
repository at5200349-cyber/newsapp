// import React, { Component } from "react";
import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResult, setTotalResult] = useState(1);

  const updateNews = async () => {
    props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&pageSize=${props.pageSize}&page=1&category=${props.category}&apiKey=${props.api}`;
    setLoading(true);

    let data = await fetch(url);
    props.setProgress(30);
    let passedData = await data.json();
    props.setProgress(60);

    setArticle(passedData.articles);
    setTotalResult(passedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    document.title= `${props.category}-NewsApp`
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setPage(1);

    updateNews();
  }, [props.category]);

  const fetchMoreData = async () => {
    const nextpage = page + 1;

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&page=${nextpage}&pageSize=${props.pageSize}&category=${props.category}&apiKey=${props.api}`;
    let data = await fetch(url);
    let passedData = await data.json();
    setArticle(article.concat(passedData.articles));
    setPage(nextpage);
    setTotalResult(passedData.totalResults);
  };
console.log("Article =", article);
console.log("Total Result =", totalResult);
console.log(typeof article);

  return (
    <>
      <div className="container my-3">
        <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length !== totalResult}
          loader={loading && <Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="row">
            {article.map((ele, idx) => {
              return (
                <div className="col-md-4" key={`${ele.url}-${idx}`}>
                  <Newsitem
                    title={(ele.title || "").slice(0, 45)}
                    description={(ele.description || "").slice(0, 45) + "....."}
                    imageurl={ele.urlToImage}
                    newurl={ele.url}
                    author={ele.author}
                    date={ele.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};
News.defaultProps = {
  country: "us",
  pageSize: 12,
  category: "sports",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
