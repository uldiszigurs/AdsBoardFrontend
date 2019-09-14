import { connect } from "react-redux";
import { getCategoryList } from "./CategoryIndex.Actions";
import CategoryIndex from "./CategoryIndex";


const stateToProps = state => {
  return (
    {
      categoryList: state.categoryList,
    }
  );
};
export default connect(
  stateToProps,
  { getCategoryList }
)(CategoryIndex);
