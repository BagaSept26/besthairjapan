import { Fragment} from 'react';
import PropTypes from 'prop-types';

import '../styles/Details.css';

const Comparison = ({url, title = ''}) => (
    <Fragment>
        <img className="comparing-image" src={url} alt={title} />
        {!!title && <span className="cd-image-label" data-type="modified">{title}</span>}
    </Fragment>
);

Image.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string
}

Image.defaultProps = {
    title: ''
}

export default Comparison;