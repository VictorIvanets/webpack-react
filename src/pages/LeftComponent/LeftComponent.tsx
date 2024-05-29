import Reactlogo from 'shared/assets/react-1.svg'
import Reduxlogo from 'shared/assets/redux.svg'
import Jslogo from 'shared/assets/logo-javascript.svg'
import Tslogo from 'shared/assets/typescript.svg'
import Sasslogo from 'shared/assets/sass-1.svg'






const LeftComponent = () => {
    return (
        <div className='leftpanel'>
            <Reactlogo className='svglogo'/>
            <Reduxlogo className='svglogo'/>
            <Jslogo className='svglogo'/>
            <Tslogo className='svglogo'/>
            <Sasslogo className='svglogo'/>
        </div>
    );
};

export default LeftComponent;