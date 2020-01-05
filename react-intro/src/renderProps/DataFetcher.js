import {Component} from "react";
import PropTypes from "prop-types";

class DataFetcher extends Component {

    state = {
        loading: false,
        data: null,
        error: null
    };

    componentDidMount() {
        this.setState({loading: true});
        fetch(this.props.url)
            .then(res => res.json())
            .then(data => this.setState({data: data, loading: false}))
            .catch(error => this.setState({error: "Error during fetch", loading:false}))
    }

    render() {
        const {data, loading, error} = this.state;
        return (this.props.children({loading, data, error}))
    }
}

DataFetcher.propTypes = {
    url: PropTypes.string.isRequired
};

export default DataFetcher