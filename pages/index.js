import { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Link from 'next/link';

import StoryList from '../components/StoryList';
import Layout from '../components/Layout';

class Index extends Component {
  static async getInitialProps({ req, res, query }) {
    let stories;
    let page;
    try {
      page = Number(query.page) || 1;
      const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
      //below is to check the error page
      // const res = await fetch('https://node-hnapi.herokuapp.c');

      stories = await res.json();
    }
    catch (err) {
      stories = [];
      console.log(err);
    }
    return { page, stories };
  }
  render() {
    const { stories, page } = this.props;

    if (stories.length === 0) return <Error statusCode={503} />
    return (
      <Layout title='Hacker Next' description='A Hacker News clone made with Next.js'>
        {/* <h1>Hacker News</h1> */}
        <StoryList stories={stories} />
        <footer>
          <Link href={`/?page=${page + 1}`}>
            <a>Next Page # {page + 1}</a>
          </Link>
        </footer>
        <style jsx>{`
          footer {
            padding: 1em;
          }
          footer a {
            font-weight: bold;
            color: black;
            text-decoration: none;
          }
        `}
        </style>
      </Layout>
    )
  }
}

export default Index;