import { useEffect } from 'react';
import { connect } from 'react-redux';
import { googleOAuthLogin } from './actions/index';

const Test = (props) => {
  console.log({props});
	return (
		<div style={{textAlign:'center'}}>
			<p>test</p>
		</div>
	);
};

function mapStateToProps(state) {
	//Here you can get whatever the component needs from redux store...
	return { ...state };
}

export default connect(mapStateToProps, { googleOAuthLogin })(Test);
