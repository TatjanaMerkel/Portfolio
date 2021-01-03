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
      <ul>
        {this.state.categories.map((category, index) => (
          <li>
            {category.id} {category.name}
            <Button onClick={() => this.handleEdit(category.id)}>
              Edit
            </Button>{" "}
            <Button onClick={() => this.handleDelete(category.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    );
  }
}

export default CategoryList;
