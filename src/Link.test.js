import React from 'react'
import './setupTests';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';


const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};


//<Link page="http://www.facebook.com">Facebook</Link>
class Link extends React.Component {
    constructor(props) {
        super(props);
        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);
        this.state = {
            class: STATUS.NORMAL,
        };
    }

    _onMouseEnter() {
        this.setState({class: STATUS.HOVERED});
    }

    _onMouseLeave() {
        this.setState({class: STATUS.NORMAL});
    }
    
    render() {
        return (
            <a
                className={this.state.class}
                href={this.props.page || '#'}
                onMouseEnter={this._onMouseEnter}
                onMouseLeave={this._onMouseLeave}
            >
                {this.props.children}
            </a>
        );
    }
}

test('component is not crashing', () => {

    const wrapper = shallow(<Link />)
    expect(wrapper).not.toEqual(new Error())

});

it('renders correctly', () => {

    const renderer = new ShallowRenderer()
    renderer.render(<Link />)
    const view = renderer.getRenderOutput()
    expect(view).toMatchSnapshot()

    // const component = renderer.create(
    //     <Link page="http://www.facebook.com">Facebook</Link>,
    // );
    // let tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
    
});

test('can see title', () => {

    const wrapper = shallow(
            <Link page='http://www.facebook.com'>
                Facebook
            </Link>);
            
    expect(wrapper.text()).toEqual('Facebook');
    expect(wrapper.find('a').prop('href')).toEqual('http://www.facebook.com')

});

test('validate props', () => {

    const wrapper = shallow(
        <Link 
            page="http://www.facebook.com"
            children='Facebook'
        />
    );
    
    expect(wrapper.find('a').get(0).props.href).toEqual('http://www.facebook.com')
    expect(wrapper.find('a').get(0).props.children).toEqual('Facebook')

});