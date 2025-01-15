import { Link } from "react-router";
import PropTypes from 'prop-types';

export default function UserInfo(props) {
    const { user } = props;
    const {name, id, website, company} = user;
    return (
        <Link to={`/posts/${name}/${id}`} >
            <div className="container user" id={id} key={id} >
                <div className="name" ><h2>{name}</h2></div>
                <div className="website"><h4>Website: {website}</h4></div>
                <div className="companyInfo"><h4>Company Name: {company.name}</h4></div>
            </div>
        </Link>
    )
}
UserInfo.propTypes = {
    user: PropTypes.object
}
