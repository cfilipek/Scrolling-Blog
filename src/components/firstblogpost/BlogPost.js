import React from 'react';
import Header from './Header';
import Wordsoup from './Wordsoup';
import LearningHeader from './LearningHeader';
import Thanks from './Thanks';
import TopContent from './TopContent';
import IconRow from './IconRow';
import MiddleContent from './MiddleContent';
import Quote from './Quote';
import BulletPoints from './BulletPoints';
import BottomContent from './BottomContent';
import Footer from './Footer';

import './BlogPost.scss';


const BlogPost = () => {
  return (
    <section>
      <Header/>
      <Wordsoup/>
      <LearningHeader/>
      <Thanks/>
      <TopContent/>
      <IconRow/>
      <MiddleContent/>
      <Quote/>
      <BulletPoints/>
      <BottomContent/>
      <Footer/>
    </section>
  );
}

export default BlogPost;
