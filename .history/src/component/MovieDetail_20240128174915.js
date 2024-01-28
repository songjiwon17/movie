import { useParams } from "react-router-dom";

const DetailPage = (props) => {
  let { id } = useParams();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={process.env.PUBLIC_URL + `/${id}.png`} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.player[id].name}</h4>
          <p>{props.player[id].age}</p>
          <p>{props.player[id].position}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};
export default DetailPage;
