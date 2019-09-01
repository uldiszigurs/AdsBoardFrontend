import { connect } from "react-redux";
import { getCategoryPosts, changeCategoryState } from "./CategoryPosts.Actions";
import CategoryPosts from "./CategoryPosts";


const stateToProps = state => {
  return (
    {
      token: state.user.token,
      categoryPosts: state.categoryPosts,
      category: state.category
    }
  );
};
export default connect(
  stateToProps,
  { getCategoryPosts, changeCategoryState }
)(CategoryPosts);
