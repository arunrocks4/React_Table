import React from "react";
import { Input } from "semantic-ui-react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import "./index.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { firstName: "aaaaa", status: "Pending", visits: 155 },
        { firstName: "aabFaa", status: "Pending", visits: 155 },
        { firstName: "adaAAaaa", status: "Approved", visits: 1785 },
        { firstName: "aAaaaa", status: "Approved", visits: 175 },
        { firstName: "adaSaaa", status: "Cancelled", visits: 165 },
        { firstName: "aasaaa", status: "Cancelled", visits: 157 },
        { firstName: "aweaaaaaewea", status: "Approved", visits: 153 },
        { firstName: "aaaaaa", status: "Submitted", visits: 155 },
        { firstName: "aaaeweaa", status: "Pending", visits: 1555 },
        { firstName: "aabFaa", status: "Submitted", visits: 155 },
        { firstName: "adaAAadsdweaa", status: "Approved", visits: 17585 },
        { firstName: "aAaaaa", status: "Approved", visits: 175 }
      ],
      columns: [],
      searchInput: ""
    };
  }

  componentDidMount() {
    let columns = [
      {
        Header: "First Name",
        accessor: "firstName",
        sortable: false,
        show: true,
        displayValue: " First Name"
      },
      {
        Header: "Status",
        accessor: "status",
        sortable: false,
        show: true,
        displayValue: "Status "
      },
      {
        Header: "Visits",
        accessor: "visits",
        sortable: false,
        show: true,
        displayValue: " Visits "
      }
    ];
    this.setState({ columns });
  }

  handleChange = event => {
    this.setState({ searchInput: event.target.value }, () => {
      this.globalSearch();
    });
  };

  globalSearch = () => {
    let { data, searchInput } = this.state;
    if (searchInput) {
      let filteredData = data.filter(value => {
        return (
          value.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
          value.status.toLowerCase().includes(searchInput.toLowerCase()) ||
          value.visits
            .toString()
            .toLowerCase()
            .includes(searchInput.toLowerCase())
        );
      });
      this.setState({ data: filteredData });
    }
  };

  render() {
    let { data, columns, searchInput } = this.state;
    return (
      <div>
        <br />
        <Input
          size="large"
          name="searchInput"
          value={searchInput || ""}
          onChange={this.handleChange}
          label="Search"
        />
        <br />
        <br />
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="table-styles"
        />
      </div>
    );
  }
}

export default Table;
