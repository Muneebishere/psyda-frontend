import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import React from "react";

const { SearchBar } = Search;

const products = [
  {id: 0, name: "John", price: 100},
  {id: 1, name: "Shelly", price: 2100},
  {id: 2, name: "Donee", price: 1100},
  {id: 3, name: "Fred", price: 150},
  {id: 4, name: "Clark", price: 1030},
  {id: 5, name: "Steve", price: 1004},
  {id: 6, name: "Bruce", price: 11100},
  {id: 7, name: "Kent", price: 3100},
  {id: 8, name: "Natasha", price: 5500},
  {id: 9, name: "Chris", price: 1300},
  {id: 10, name: "Tony", price: 10100},
  {id: 11, name: "Ross", price: 1400},
  {id: 12, name: "Joe", price: 5100},
  {id: 13, name: "Denis", price: 8100},
  {id: 14, name: "Stan", price: 1070},
  {id: 15, name: "Lenny", price: 1600},
  {id: 16, name: "Martin", price: 1400}];

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Product Name',
  sort: true
}, {
  dataField: 'price',
  text: 'Product Price',
  sort: true
}];
  

export default () =>
<ToolkitProvider
  bootstrap4
  keyField="id"
  data={ products }
  columns={ columns }
  search
  >
  {
    props => (
      <div>
        <SearchBar { ...props.searchProps } />
        <hr />
        <BootstrapTable
          bootstrap4
          { ...props.baseProps }
          cellEdit={ cellEditFactory({ mode: 'click' }) }
          pagination={ paginationFactory() }
        />
      </div>
    )
  }
</ToolkitProvider>



  // <BootstrapTable 
  //   bootstrap4 keyField='id' 
  //   data={ products } 
  //   columns={ columns } 
  //   cellEdit={ cellEditFactory({ mode: 'click' }) }
  //   pagination={ paginationFactory() }
  // />