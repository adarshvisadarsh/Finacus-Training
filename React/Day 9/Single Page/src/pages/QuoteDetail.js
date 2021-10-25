import { Fragment } from "react";
import Comments from '../components/comments/Comments'
import { useParams, Route } from "react-router";
const QuoteDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Quotes Detail Page</h1>
      <p>
        <params>{params.quoteID}</params>
      </p>
      <Route path={`/quotes/${params.quoteID}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
