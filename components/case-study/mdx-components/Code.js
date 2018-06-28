import Highlight from 'react-highlight';
import { stripIndent } from 'common-tags';

export default props => (
	<Highlight className={props.className.replace('language-', '')}>
		{stripIndent`${props.children}`}
	</Highlight>
);
