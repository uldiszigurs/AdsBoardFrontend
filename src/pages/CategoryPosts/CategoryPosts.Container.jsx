import { connect } from "react-redux";
import { getCategoryPosts } from "./CategoryPosts.Actions";
import CategoryPosts from "./CategoryPosts";

const stateToProps = state => ({
  user: state.user,
  categoryPosts: state.categoryPosts
});

export default connect(
  stateToProps,
  { getCategoryPosts }
)(CategoryPosts);
