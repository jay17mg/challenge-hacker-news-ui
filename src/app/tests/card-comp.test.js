import CardComp from '../components/card-comp';
import data from './mock-data.json'
import { render } from '@testing-library/react';

describe('test card component', () =>{
    it('renders card component',() =>{
        const {container} = render(
            <>
                {/* {data.map((d,i) =>{ */}
                    <CardComp key = {data[0].id} data={data[0]} index={1} />
                {/* })} */}
            </>
        )
        // let tree = comp.toJSON()
        expect(container).toMatchSnapshot();

    }) 
})