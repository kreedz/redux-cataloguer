declare function require(s: string): string;
const imgs = {
  liked: require('img/like__liked.png'),
  notLiked: require('img/like__not_liked.png'),
  edit: require('img/edit.png'),
};

export default imgs;
