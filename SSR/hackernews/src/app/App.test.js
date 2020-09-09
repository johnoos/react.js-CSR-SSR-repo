import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'; 
import App, { Search, Button,  Table } from './App';

Enzyme.configure({ adapter: new Adapter() });

//describe('App', 
//describe('Search',
//describe('Button',
describe('Table',
          () => {

            // 4 (next 5 lines)
            const props = {
            list: [
            { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
            { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' }, ],
            };       

            it('renders without crashing', 
                () => {
                  const div = document.createElement('div');

                  // 1 ReactDOM.render(<App />, div); 

                  // 2 ReactDOM.render(<Search> Search </Search>, div);

                  // 3 ReactDOM.render(<Button>Give Me More</Button>, div);

                  ReactDOM.render(<Table { ...props } />, div); 
                  ReactDOM.unmountComponentAtNode(div);
                }
            );

            test('has a valid snapshot', 
                  () => {

                    // 1 const component = renderer.create(
                    // 1 <App /> );   

                    // 2 const component = renderer.create(
                    // 2   <Search> Search </Search>   );

                    // 3 const component = renderer.create(
                    // 3 <Button>Give Me More</Button>   );

                    const component = renderer.create(
                    <Table { ...props } />   );

                    let tree = component.toJSON();
                    expect(tree).toMatchSnapshot(); 
                  } 
            );
             
            it('shows two items in list', () => { const element = shallow(
              <Table { ...props } /> );
              expect(element.find('.table-row').length).toBe(2); });
          } 
); 