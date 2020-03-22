import { Component } from 'react';
import fetch from 'isomorphic-fetch';
import Error from 'next/error';

import StoryList from '../components/StoryList';


class Index extends Component {
  static async getInitialProps() {
    let stories;
    try {
      const res = await fetch('https://node-hnapi.herokuapp.com/news?page=1');
      //below is to check the error page
      // const res = await fetch('https://node-hnapi.herokuapp.c');

      stories = await res.json();
    }
    catch (err) {
      stories = [];
      console.log(err);
    }
    return { stories };
  }
  render() {
    const { stories } = this.props;

    if (stories.length === 0) return <Error statusCode={503} />
    return (
      <div>
        <h1>Hacker News</h1>
        <StoryList stories={stories} />
      </div>
    )
  }
}

export default Index;