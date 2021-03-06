import React from 'react';

const TwitterFollowButton = (Props) => {
  return (
    <a href="https://twitter.com/{{site.twitter_username}}?ref_src=twsrc%5Etfw" class="twitter-follow-button"
  data-size="large" data-show-count="true">Follow @{{site.twitter_username}}</a>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  );
}

const styles = StyleSheet.create({
});

export default TwitterFollowButton;