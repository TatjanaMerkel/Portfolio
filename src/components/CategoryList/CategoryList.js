import { Button } from "react-bootstrap";
import React from "react";

class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      categories: [],
    };
  }

  async componentDidMount() {
    const res = await fetch("http://localhost:3001/categories/");
    const categories = await res.json();
    this.setState({ categories: categories });
  }

  async handleDelete(id) {
    console.log(id);
    const res = await fetch(`http://localhost:3001/category/${id}`, {
      method: "DELETE",
    });

    const newCategories = this.state.categories.filter(function (obj) {
      return obj.id !== id;
    });

    this.setState({ categories: newCategories });

    console.log(this.state.categories);

    console.log("Delete result: ");
    console.log(res);
  }

  handleEdit = (id) => {
    this.props.history.push(`/admin/edit-category/${id}`);
  }
  render() {
    return (
      <table style={{margin: ' 25px auto', width: '80%' }} class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Kategorie</th>
            <th scope="col">Bearbeiten</th>
            <th scope="col">Löschen</th>
          </tr>
        </thead>
        <tbody>
          {this.state.categories.map((category, index) => (
            <tr>
              <th scope="row">{category.id}</th>
              <td>{category.name}</td>
              <td>
                <Button onClick={() => this.handleEdit(category.id)}>
                  Bearbeiten
                </Button>
              </td>
              <td>
                <Button onClick={() => this.handleDelete(category.id)}>
                Löschen
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default CategoryList;
