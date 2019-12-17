import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/blog.css';

export default class BlogHeader extends React.Component {

  render() {
    const { image, title, subtitle, postDate, author } = this.props;
    return (
      <React.Fragment>
      <header className="blog-masthead blog-overlay" style={{backgroundImage: 'url('+ image.fluid.src + ')'}}>
        <div style={{backgroundColor: "#212529", opacity: "0.5"}}>
        {/* <div className="blog-overlay"></div> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="blog-post-heading">
                <div>
                  <h1 style={{color: "white", fontSize: "55px", fontWeight: "800"}}>{title}</h1>
                  <h2 style={{color: "white"}} className="blog-subheading">{subtitle}</h2>
                  <span className="blog-meta">Posted by <a href="/about-us">{author}</a> on {postDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </header>
      </React.Fragment>
    )
  }
}